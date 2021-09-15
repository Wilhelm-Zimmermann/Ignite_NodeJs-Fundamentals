const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses",(req,res) => {
    return res.json({
        courses:[
            {
                name : "Ignite",
                price : 2000
            },
            {
                name : "Discovery",
                price : 2000
            },
            {
                name : "Node js",
                price : 2000
            },
        ]
    });
})

app.post("/courses",(req,res) => {
    return res.json({
        courses:[
            {
                name : "Ignite",
                price : 2000
            },
            {
                name : "Discovery",
                price : 2000
            },
            {
                name : "Node JS",
                price : 2000
            },
            {
                name : "React JS",
                price : 2000
            },
        ]
    })
});

app.put("/courses/:id",(req,res) => {
    const { id } = req.params;
    console.log(id);
    const { name } = req.body;
    return res.json({
        courses:[
            {
                name : name,
                price : 2000
            },
            {
                name : "Discovery",
                price : 2000
            },
            {
                name : "Node JS",
                price : 889.01
            },
            {
                name : "React JS",
                price : 2000
            },
        ]
    });
});

app.delete("/courses",(req,res) => {
    const { id } = req.query;
    console.log(id);
    return res.json({
        courses:[
            {
                name : "Ignite",
                price : 2000
            },
            {
                name : "Node JS",
                price : 2000
            },
            {
                name : "React JS",
                price : 2000
            },
        ]
    })
});

app.put("/courses/:id",(req,res) => {
    return res.json({
        courses:[
            {
                name : "Ignite",
                price : 2000
            },
            {
                name : "Discovery",
                price : 2000
            },
            {
                name : "Node JS",
                price : 889.01
            },
            {
                name : "React JS",
                price : 2000
            },
        ]
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});