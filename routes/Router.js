const express = require(`express`);
const router = express.Router();

const {
  getAllInquiries,
  addInquiry,
} = require(`../controllers/mainControllers`);

router.route(`/`).get(getAllInquiries).post(addInquiry);

module.exports = router;
