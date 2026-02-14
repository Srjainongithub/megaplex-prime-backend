// backend/controllers/authController.js

exports.login = (req, res) => {
    const { email, password } = req.body;
    
    // Fixed credentials as per requirement
    if (email === 'admin@gmail.com' && password === '1234') {
        res.json({ 
            success: true, 
            message: 'Login successful',
            admin: true 
        });
    } else {
        res.status(401).json({ 
            success: false, 
            message: 'Invalid email or password' 
        });
    }
};