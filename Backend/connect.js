const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegModel = require('./Module/Reg');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3400;

mongoose.connect('mongodb://localhost:27017/register')
.then(() => console.log("Mongoose connected"))
.catch(err => console.error("MongoDB connection error:", err));

// For register
app.post('/register', (req, res) => {
    RegModel.create(req.body)
        .then(registers => res.json(registers))
        .catch(err => res.json(err));
});

// For login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const login = await RegModel.findOne({ email });
        if (login) {
            if (login.password === password) {
                res.json({ message: "success", userId: login._id });
            } else {
                res.json({ message: "password is incorrect" });
            }
        } else {
            res.json({ message: "no record existed" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// For logout
app.post('/logout', async (req, res) => {
    const { userId } = req.body;

    try {
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Clear token or session if necessary (if using JWT or similar)
        // In this example, we'll just acknowledge the logout for simplicity
        const user = await RegModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        res.json({ message: 'Logout successful' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`connected ${PORT}`);
});
