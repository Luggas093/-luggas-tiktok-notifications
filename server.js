import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "online",
        project: "Luggas TikTok Notifications"
    });
});

app.use(express.static("."));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
