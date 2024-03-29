const router = require("express").Router();
const Feedback = require("../models/feedbackModel");


//add a feedback

router.post("/add-feedback", async (req, res) => {
    try {

        // const{name,text,rate}=req.body;
        // const newFeedback=new Feedback({name,text,rate});
        const newFeedback = req.body;
        await Feedback.create(newFeedback);
        return res.send({ success: true, message: "Feedback added Successfully", newFeedback });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});
//get all feedbacks
router.get("/get-feedback/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const feedbacks = await Feedback.find({ email });
        return res.send({ success: true, data: feedbacks })
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

//update feedbacks
router.put("/update-feedback/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const { text, rate } = req.body;
        console.log(rate)
        const updatedFeedback = await Feedback.updateOne({ _id: id }, { text, rate });
        return res.send({ success: true, message: "Feedback updated successfully", updatedFeedback: updatedFeedback});
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});


//deleteFeedbacks
router.delete("/delete-feedback/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Feedback.deleteOne({ _id: id });
        return res.send({ success: true, message: "Feedback deleted successfully" });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

//getAllFeedbacks
router.get("/get-all-feedbacks", async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).send({message: "Feedbacks", feedbacks});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Failed to retrieve feedbacks"})
    }
});

module.exports = router;

