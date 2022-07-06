import express from "express";
import { memo } from "react";
import { getResult } from "../controllers/memo.controller.js";
 export const memoRouter =express.Router();

 memoRouter.get("/", (req, res) => getResult(req, res));