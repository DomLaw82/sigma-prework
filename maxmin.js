function maxmin(arr) {
  const numericalSort = (a, b) => a - b;
  arr = arr.sort(numericalSort);
  return [arr[0], arr.pop()];
}
