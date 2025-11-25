import express from "express";
import postsRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";
import { config } from "./config.mjs";
import { db } from "./db/database.mjs";

const app = express();

// json 통신사용
app.use(express.json());

/* 라우팅 */
// /post로 접근
app.use("/post", postsRouter);
// /auth로 접근
app.use("/auth", authRouter);

/* 404 not found */
app.use((req, res, next) => {
  res.sendStatus(404);
});

// mysql연결
db.getConnection().then((connection) => console.log(connection));

app.listen(config.host.port);
