const express = require("express");

const app = express();

app.get("/",(req,res) => {
    return res.json({ 
        msg : "Hello Ignite"
    });
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});