const express = require("express");
const app = express();

app.use(express.json()); 

app.get("/api/get", (req, res) => {
    res.status(200).json({ message: "Hello" });
});

app.post("/api/create", (req, res) => {
    const data = req.body;
    res.status(201).json({ message: "Data created successfully", data });
});

app.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Data with id ${id} deleted successfully` });
});

app.put("/api/update/:myid", (req, res) => {
    const id = req.params.myid;
    const updatedData = req.body;
    res.status(200).json({ message: `Data with id ${id} updated successfully`, updatedData });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
