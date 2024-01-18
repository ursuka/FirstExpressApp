const express = require("express");

const app = express();

// app.use((req, res) => {
//     console.log("We got a request!")
//     // res.send("We got your request! this is a responce!")
//     // res.send({ color: "red", name: "Blue", age: "54" })
//     res.send("<h1>This is a responce H1</h1>")
// })
app.get("/", (req, res) => {
    res.send("home page!")
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1> with the id of ${postId}`)
})

app.get("/cats", (req, res) => {
    console.log("cat request!");
    res.send("meow!")
})

app.post("/cats", (req, res) => {
    res.send("Request was posted on /cats")
})
app.get("/dogs", (req, res) => {
    console.log("dog request!");
    res.send("bark!")
})

app.get("*", (req, res) => {
    res.send("Undentified request!")
})
app.listen(3000, () => {
    console.log("Port: 3000")
})