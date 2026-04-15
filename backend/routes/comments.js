const express = require('express');
const Comment = require('../models/Comment');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Add comment to application (admin)
router.post('/:applicationId', protect, authorize('admin'), async (req, res) => {
  try {
    const comment = await Comment.create({
      application: req.params.applicationId,
      user: req.user._id,
      comment: req.body.comment
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get comments for application (protected)
router.get('/:applicationId', protect, async (req, res) => {
  try {
    const comments = await Comment.find({ application: req.params.applicationId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

