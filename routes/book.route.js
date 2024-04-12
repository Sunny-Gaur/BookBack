import express from "express";
import { getbook } from "../Controler/book.controler.js";
const router=express.Router();
router.get("/",getbook);
export default router;