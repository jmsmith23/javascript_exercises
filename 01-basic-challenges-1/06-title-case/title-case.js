function titleCase(str) {
  const text = str.toLowerCase().split(' ');

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].slice(1);
  }
  return text.join(' ');
}

module.exports = titleCase;
