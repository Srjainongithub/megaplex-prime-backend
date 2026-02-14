// backend/models/Content.js

const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    heroTitle: {
        type: String,
        default: 'Welcome to Megaplex Prime'
    },
    heroSubtitle: {
        type: String,
        default: 'Where Luxury Meets Comfort'
    },
    projectOverview: {
        type: String,
        default: 'Megaplex Prime is a premium residential project spread across 10 acres of lush greenery. Offering 2/3/4 BHK luxury apartments with world-class amenities.'
    },
    nearbyConnectivity: {
        type: String,
        default: '• 5 mins to Metro Station\n• 10 mins to Airport\n• 2 mins to Shopping Mall\n• 15 mins to City Center'
    },
    amenities: {
        type: String,
        default: 'Swimming Pool, Gymnasium, Club House, Children Play Area, Landscape Garden, Jogging Track'
    },
    aboutUs: {
        type: String,
        default: 'Megaplex Group has been delivering excellence in real estate for over 25 years. With 50+ completed projects and 10000+ happy families, we are committed to quality and timely delivery.'
    },
    constructionUpdates: {
        type: String,
        default: 'Tower A: 18th floor ongoing\nTower B: 15th floor ongoing\nTower C: Foundation work\nPossession: Dec 2025'
    },
    faq: {
        type: String,
        default: 'Q: What is the price?\nA: Starting from ₹75 Lakhs\n\nQ: When is possession?\nA: December 2025\n\nQ: Is home loan available?\nA: Yes, from all major banks'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Content', contentSchema);