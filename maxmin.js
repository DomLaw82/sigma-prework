function maxmin(arr) {
  const numericalSort = (a, b) => a - b;
  arr = arr.sort(numericalSort);
  return [arr[0], arr.pop()];
}
console.log(
  maxmin([
    2, 3234, 421, 4545, 435, 12, 53, 8, 686, 46, 85, 343, 754, 23243, 53, -11,
  ])
);
