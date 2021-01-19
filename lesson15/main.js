for (let j = 0; j < 5; j++) {
  sum = 0;
  console.time('Typed for');
  for (let i = 0; i < len; i = (i + 1) | 0) {
    sum += arr[i];
  }
  console.timeEnd('Typed for');
  console.log(sum);
}

// Typed forが平均的に速いかも
