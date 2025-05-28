import express, { type Request, type Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript on Render!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
