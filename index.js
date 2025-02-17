const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]$/.test(item));

    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: userId,
        email,
        roll_number: rollNumber,
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
