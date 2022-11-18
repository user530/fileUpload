const f1 = async (req, res, next) => {
  console.log(`F1 fired`);
  res.send(`<h1>This is F1</h1>`);
};
const f2 = async (req, res, next) => {
  console.log(`F2 fired`);
  res.send(`<h1>This is F2</h2>`);
};

module.exports = { f1, f2 };
