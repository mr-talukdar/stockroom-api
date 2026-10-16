import { Router } from "express";

import { LoginController } from "../controllers/LoginController";
import { SignupController } from "../controllers/SignupController";

const router = Router();

router.post("/login", LoginController);
router.post("/signup", SignupController);

export { router };
