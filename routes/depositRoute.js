const express = require("express");
const router = express.Router();
const Deposit = require("../src/model/Deposit");

// getAll the post
router.get("/api/deposit", async (req, res) => {
  try {
    const deposit = await Deposit.find({});
    res.status(200).send(deposit);
  } catch (error) {
    res.status(500).send({ error: "somethig went wrong! Try agian" });
  }
});
router.post("/api/deposit", async (req, res) => {
  const depost = new Deposit({...req.body});
  try {
    await depost.save()
    res.status(201).send(depost);
  } catch (error) {
    res.status(400).send({error: error.message})
  }
});
router.delete("/api/deposit/:id",async (req,res)=>{
try {
    const deposit = await Deposit.findById(req.params.id);
    if(!deposit){
      res.status(404).send({message: "No post found By this id!"})
      return;
    }
    await deposit.remove();
    res.status(200).send(deposit);
  } catch (error) {
    res.status(500).send({error:"something went wrong! Try agian"})
  }
})

router.put("/api/deposit/:id", async (req, res) => {
  console.log(req.body)
  const action = req.body.action;
  try {
    const deposit = await Deposit.findById(req.params.id);
    if (!deposit) {
      res.status(404).send({ message: "no deposit found" });
      return;
    }
    deposit.action = action
    
    await deposit.save();
    res.status(200).send(deposit);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
