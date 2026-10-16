import express from "express";
import type { NextFunction, Request, Response } from "express";
import { router } from "./routes/routes";

const app = express();

app.use(express.json());

app.get("/health/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: "stockroom-api",
  });
});

app.use(router);
//Catch all nonexisting routes

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "We are still expanding, check other offerings",
  });
});

//Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export { app };
