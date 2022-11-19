// Import express and create router instance
const express = require(`express`);
const router = express.Router();

// Import main controller functions
const {
  getAllInquiries,
  addInquiry,
} = require(`../controllers/mainControllers`);

// Import file upload functions
const { uploadImgLocal, uploadImgCloud } = require(`../controllers/imgUpload`);

// Set up main route and support (img upload) route
router.route(`/api/v1`).get(getAllInquiries).post(addInquiry);
router.route(`/uploadImg`).post(uploadImgLocal);

module.exports = router;
