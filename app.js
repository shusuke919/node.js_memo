import express, { request } from "express";
//メモのrouterを読み込む
import { memoRouter } from "./routes/memo.route.js";
const app = express();
// 🔽 追加
import { todoRouter } from "./routes/todo.route.js";
import { slackRouter } from "./routes/slack.route.js";

// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());

const port =3001;

app.get("/", (req, res) => {
  res.json({
   uri: "/",
   message: "テスト成功",
  });
});




app.use("/memo", (req, res) => memoRouter(req, res));
// 🔽 追加
app.use("/todo", (req, res) => todoRouter(req, res));
app.use("/slack", (req, res) => slackRouter(req, res));


app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});