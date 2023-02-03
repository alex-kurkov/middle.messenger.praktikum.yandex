module.exports = function loader(source) {
  const regEx = /(?<=[>}]{1})\s*(?=[<{]{1})/gi;
  const spacesRegEx = /\s+/gi;
  return source.replaceAll(regEx, '').replace(spacesRegEx, ' ');
};
