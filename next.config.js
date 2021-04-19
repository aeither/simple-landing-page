
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['9xJG4KN5rLUh22CtRoJihu'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  