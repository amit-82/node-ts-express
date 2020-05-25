import express, { RequestHandler, response } from "express";

const app = express();

app.get("/test", (_, res) => {
	return res.send("dsddxxx666");
});

export default app;
