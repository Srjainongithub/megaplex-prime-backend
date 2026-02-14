const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Schema (7 sections as per assignment)
const ContentSchema = new mongoose.Schema({
    hero: { type: String, default: 'Welcome to Megaplex Prime' },
    projectOverview: { type: String, default: 'Luxury apartments with world-class amenities' },
    nearbyConnectivity: { type: String, default: '5 mins to Metro\n10 mins to Airport' },
    amenities: { type: String, default: 'Swimming Pool, Gym, Club House' },
    aboutUs: { type: String, default: '25 years of excellence' },
    constructionUpdates: { type: String, default: 'Tower A: 18th floor' },
    faq: { type: String, default: 'Q: Price? A: ₹75 Lakhs' }
});

const Content = mongoose.model('Content', ContentSchema);

// Auth route (simple as per assignment)
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@gmail.com' && password === '1234') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Get content
app.get('/api/content', async (req, res) => {
    let content = await Content.findOne();
    if (!content) content = await Content.create({});
    res.json(content);
});

// Update content
app.put('/api/content', async (req, res) => {
    let content = await Content.findOne();
    if (!content) content = new Content();
    Object.assign(content, req.body);
    await content.save();
    res.json({ success: true });
});

app.listen(5000, () => console.log('Server on 5000'));