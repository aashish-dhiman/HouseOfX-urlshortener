import express from "express";
import morgan from "morgan";
import cors from "cors";
import linksRouter from "./routes/links";

const app = express();

app.use(morgan("dev"));
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", linksRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
