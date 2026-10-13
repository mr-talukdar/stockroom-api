import "dotenv/config";
import { app } from "./app";

const port = process.env.port || process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on express");
});
