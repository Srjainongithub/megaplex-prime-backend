// backend/controllers/contentController.js

const Content = require('../models/Content');

// GET all content
exports.getContent = async (req, res) => {
    try {
        let content = await Content.findOne();
        
        // Agar database mein kuch nahi hai toh default content create karo
        if (!content) {
            content = await Content.create({});
        }
        
        res.json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE content
exports.updateContent = async (req, res) => {
    try {
        let content = await Content.findOne();
        
        if (!content) {
            content = new Content();
        }
        
        // Saare fields update karo jo request mein aaye hain
        Object.keys(req.body).forEach(key => {
            if (content[key] !== undefined) {
                content[key] = req.body[key];
            }
        });
        
        await content.save();
        res.json({ 
            success: true, 
            message: 'Content updated successfully',
            content 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};