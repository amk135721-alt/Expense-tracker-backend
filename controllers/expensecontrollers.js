import expenseschema from "../models/expenseschema.js";
export const addexpense=async(req,res)=>{
    try {
        const {title,amount,category}=req.body;
        const newexpense=await expenseschema.create({
            title:title,
            amount:amount,
            category:category,
        });
        res.json({success:true,message:"New entry added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"SOME INTERNAL ERROR"})
    }
}
export const getexpense=async(req,res)=>{
    try {
        const allexpense=await expenseschema.find();
        res.json({success:true,expenses:allexpense});
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"SOME INTERNAL ERROR"})
        
    }
}
export const deleteexpense=async(req,res)=>{
    try {
        const expense=await expenseschema.findById(req.params.id)
        if (!expense) {
            res.json({success:false,message:"Entry not found !!!"})
            
        } else {
            await expenseschema.findByIdAndDelete(req.params.id)
            res.json({success:true,message:"Entry Deleted !!!"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"SOME INTERNAL ERROR"})
        
    }
}
export const updateexpense=async(req,res)=>{
    try {
         const expense=await expenseschema.findById(req.params.id)
        if (!expense) {
            res.json({success:false,message:"Entry not found !!!"})
            
        } else {
           const modifiedexpense={};
           const {title,amount,category}=req.body;
           if(title)modifiedexpense.title=title;
           if(amount)modifiedexpense.amount=amount;
           if(category)modifiedexpense.category=category;
           await expenseschema.findByIdAndUpdate(req.params.id,modifiedexpense)
            res.json({success:true,message:"Entry updated"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"SOME INTERNAL ERROR"})
        
    }
}
export const getsingleexpense=async(req,res)=>{
    try {
        const expense=await expenseschema.findById(req.params.id)
        res.json({success:true,expensedetail:expense});
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"SOME INTERNAL ERROR"})
        
    }
}