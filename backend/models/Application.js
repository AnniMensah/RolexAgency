const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  personalDetails: {
    age: {
      type: Number,
      min: 16
    },
    height: {
      type: String // e.g. "5'10\""
    },
    measurements: {
      bust: String,
      waist: String,
      hips: String
    },
    experience: {
      type: String,
      maxlength: 500
    }
  },
  images: [{
    type: String, // image URLs/paths
    required: true
  }],
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);

