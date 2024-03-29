const router= require("express").Router();
const Feedback= require("../models/feedbackModel");


//add a feedback

router.post("/add-feedback",async(req,res)=>{
    try{

        const{name,text,rating}=req.body;
        const newFeedback=new Feedback({name,text,rating});
        await newFeedback.save();
        return res.send({success: true,message:"Feedback added Successfully"});
    }catch(error){
    return res.send({success :false,message : error.message});
   }
});
//get all feedbacks
router.get("/get-feedback/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const feedbacks = await Feedback.find({ email });
        return res.send({success:true, data:feedbacks})
    } catch (error) {
       return res.send({ success:false ,message: error.message });
    }
});

//update feedbacks
router.put("/update-feedback/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const { text, rating } = req.body;
        await Feedback.updateOne({ email }, { text, rating });
        return res.send({ success:true,message: "Feedback updated successfully" });
    } catch (error) {
        return res.send({ success:false,message: error.message });
    }
});


//deleteFeedbacks
router.delete("/delete-feedback/:email", async (req, res) => {
    try {
        const email = req.params.email;
        await Feedback.deleteOne({ email });
        return res.send({success:true, message: "Feedback deleted successfully" });
    } catch (error) {
        return res.send({ success:false,message: error.message });
    }
});

module.exports=router;


