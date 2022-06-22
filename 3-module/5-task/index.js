function getMinMax(str) {
  let a = str.split(' ')
    .map(item => +item)
    .filter(item => !isNaN(item))
  return {min: Math.min(...a), max: Math.max(...a)}
}
