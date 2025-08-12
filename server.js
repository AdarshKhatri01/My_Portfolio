import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { fetchLeetCodeProfile } from "./services/leetcode.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/leetcode/:username", async (req, res) => {
    const { username } = req.params;
    try {
        const data = await fetchLeetCodeProfile(username);
        return res.json({ status: "success", data });
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
