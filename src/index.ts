import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
import { Config } from "./config";

const app = express();
app.use(cors());
const PORT = 3000;

app.use(bodyParser.json());

// Routes
// app.use('/api/questions', require('./routes/questions'));
// app.use('/api/check', require('./routes/checkAnswers'));
// app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use("/api/v1", routes);
app.listen(Config.port, () => {
  console.log(`Server is running on http://localhost:${Config.port}`);
});
