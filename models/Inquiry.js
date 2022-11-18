const mongoose = require(`mongoose`);

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please provide the name`],
    minLength: [2, `Name should be at least 2 character long`],
    maxLength: [20, `Name should be no more than 20 characters`],
  },
  active: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: [true, `Please provide the description`],
    maxLength: [200, `Description should be no more than 200 characters`],
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(`Inquiry`, InquirySchema);
