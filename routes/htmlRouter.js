const express = require(`express`);
const router = express.Router();

const { f1, f2 } = require(`../controllers/mainControllers`);

router.route(`/`).get(f1).post(f2);

module.exports = router;
