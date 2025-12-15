import express from "express";
import morgan from "morgan";
import cors from "cors";

import ammunitionRouter from "./routes/ammunitionRouter.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/ammunition", ammunitionRouter);

app.use((req, res, next) => {
  next(new HttpError(404, "Route not found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
