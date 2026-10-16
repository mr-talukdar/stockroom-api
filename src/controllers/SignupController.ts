import type { Request, Response } from "express";
import { zodSalts, zodUser } from "../schemas/zod/schema";
import { supabase } from "../utils/SupabaseClient";
import bcrypt from "bcrypt";

const bcryptRounds = parseInt(zodSalts.parse(process.env.SALT_ROUNDS));

const SignupController = async (req: Request, res: Response) => {
  try {
    const { data, success } = zodUser.safeParse(req.body);
    if (!success)
      return res.status(400).send("Invalid username or password format");
    const { email, password } = data;

    const { data: dbData, error } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .limit(1);

    if (error) throw new Error(error.message);
    if (dbData?.length == 1)
      return res.status(409).send(" An user already exists with this email");

    const hashed_pw = await bcrypt.hash(password, bcryptRounds);

    const dbCreateResponse = await supabase.from("users").insert({
      email: email,
      password_hash: hashed_pw,
    });

    if (dbCreateResponse.error) throw new Error(dbCreateResponse.error.message);

    res.status(201).send({
      message: "The User is created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An internal server error occurred");
  }
};

export { SignupController };
