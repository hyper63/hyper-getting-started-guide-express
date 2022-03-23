import express from "express";
import cors from "cors";

import addDoc from "./api/add-doc-to-data-svc.js";
import getDoc from "./api/get-doc-from-data-svc.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/docs", addDoc);
app.get("/docs/:id", getDoc);

app.get("/", function (req, res) {
  res.send({ name: "Getting Started Guide Express API", ok: true });
});

app.listen(3001);
