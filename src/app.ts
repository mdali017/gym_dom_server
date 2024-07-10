import express from "express";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFound from "./middleware/notFound";
import { CategoryRoute } from "./modules/category/category.routes";
const app = express();

app.use(cors());
app.use(express.json())

// application api
app.use("/api/v1/", CategoryRoute);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
