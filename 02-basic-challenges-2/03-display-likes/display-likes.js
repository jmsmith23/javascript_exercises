function displayLikes(names) {
  const allLikes = names.length;

  if (allLikes === 0) {
    return 'no one likes this';
  } else if (allLikes === 1) {
    return `${names[0]} likes this`;
  } else if (allLikes === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (allLikes === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${allLikes - 2} others like this`;
  }
}

module.exports = displayLikes;
