import express from "express";
import "dotenv/config"
import cors from "cors";

import notesRoute from "./route/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

const PORT = process.env.PORT || 5001

app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
