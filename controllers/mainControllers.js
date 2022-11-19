// Import DB model
const Inquiry = require(`../models/Inquiry`);

// Import Status Codes
const { StatusCodes } = require(`http-status-codes`);

// Function to get all inquiry items
const getAllInquiries = async (req, res, next) => {
  // Find all items
  const inquiries = await Inquiry.find({});

  //   Return data
  return res.status(StatusCodes.OK).json(inquiries);
};

// Function to add new item to the collection
const addInquiry = async (req, res, next) => {
  // Try to create new Inquiry with passed data
  const newEntry = await Inquiry.create(req.body);

  // Return insert result
  return res.status(StatusCodes.CREATED).json(newEntry);
};

module.exports = { getAllInquiries, addInquiry };
