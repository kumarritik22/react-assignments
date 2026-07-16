const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
    res.json([
        {id: 1, name: "Ritik Kumar"},
        {id: 2, name: "Virat Kohli"},
        {id: 3, name: "M.S Dhoni"},
        {id: 4, name: "Shraddha Kapoor"},
        {id: 5, name: "Ranbir Kapoor"}
    ])
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

