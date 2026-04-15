const express = require('express');
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Multer config for image uploads (local for MVP)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/applications/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image') && 
        (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG/PNG allowed'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// @desc    Create new application (talent)
router.post('/', protect, upload.array('images', 10), async (req, res) => {
  try {
    const images = req.files ? req.files.map(file => file.path) : [];
    const application = await Application.create({
      user: req.user._id,
      personalDetails: req.body.personalDetails ? JSON.parse(req.body.personalDetails) : {},
      images
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all applications (admin) or user's application (talent)
router.get('/', protect, async (req, res) => {
  try {
    const query = req.user.role === 'admin' ? {} : { user: req.user._id };
    const applications = await Application.find(query).populate('user', 'name email');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update application status (admin)
router.patch('/:id/status', protect, authorize('admin'), async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status },
      { new: true }
    ).populate('user', 'name email');
    res.json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

