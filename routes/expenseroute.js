import express from 'express';
import { addexpense, deleteexpense, getexpense, getsingleexpense, updateexpense } 
from '../controllers/expensecontrollers.js';
const router=express.Router();
router.post("/insert",addexpense);
router.get("/getall",getexpense);
router.get("/get/:id",getsingleexpense);
router.put("/update/:id",updateexpense);
router.delete("/delete/:id",deleteexpense);

export default router;