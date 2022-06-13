function truncate(str, maxlength) {
  let maxlenght = 20;
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
