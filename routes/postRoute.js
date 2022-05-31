const express =require('express')
const router = express.Router();
const Post = require("../src/model/Post.js");


// getAll the post
router.get("/api/posts", async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ error: "somethig went wrong! Try agian" });
  }
});
// create new post
router.post("/api/posts", async (req, res) => {
  const post = new Post({ ...req.body });
  try {
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post){
      res.status(404).send({message: "No post found By this id!"})
      return;
    }
    await post.remove();
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({error:"something went wrong! Try agian"})
  }
});
router.put("/api/posts/:id",async (req, res) =>{
    const title = req.body.title;
    const content = req.body.content;
    console.log(req.body)
  try {
    const post = await Post.findById(req.params.id);
    if(!post){
      res.status(404).send({message: "no user found"});
      return;
    }
    post.title =title;
    post.content =content;
    await post.save();
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send({error: error.message})   
  }
})

module.exports = router;