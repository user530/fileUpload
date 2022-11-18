// Import DB model
const Inquiry = require(`../models/Inquiry`);

// Function to get all inquiry items
const getAllInquiries = async (req, res, next) => {
  // Find all items
  const inquiries = await Inquiry.find({});

  //   Show data
  if (inquiries && inquiries.length > 0) console.log(inquiries);
  else console.log(`No items to show`);

  //   Return data
  return res.send(`<h1>This is F1</h1>`);
};

// Function to add new item to the collection
const addInquiry = async (req, res, next) => {
  console.log(`F2 fired`);

  const { name, description, image } = req.body;

  console.log(name, description, image);

  res.send(`<h1>This is F2</h2>`);
};

module.exports = { getAllInquiries, addInquiry };
