require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    const mockResponse = `Hi! I'm Huma AI. You said: ${message}. The real API isn’t available right now due to insufficient balance, but I’m working!`;
    res.json({ success: true, response: mockResponse });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));