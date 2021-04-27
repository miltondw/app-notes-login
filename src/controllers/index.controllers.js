const controllerIndex = {};

controllerIndex.renderIndex = (req, res) => {
  res.render("index");
};
controllerIndex.renderAbout = (req, res) => {
  res.render("about");
};

module.exports = controllerIndex;
