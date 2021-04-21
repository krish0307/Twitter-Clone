function dft(x) {
  let X = [];
  let N = x.length;
  for (let k = 0; k < N; k++) {
    let real = 0;
    let imaginary = 0;
    for (let n = 0; n < N; n++) {
      let phi = (TWO_PI * k * n) / N;
      real += x[n] * cos(phi);
      imaginary -= x[n] * sin(phi);
    }
    real = real / N;
    imaginary = imaginary / N;

    let freq = k;
    let amp = sqrt(real * real + imaginary * imaginary);
    let phase = atan2(imaginary, real);
    X[k] = {
      real,
      imaginary,
      freq,
      amp,
      phase,
    };
  }
  return X;
}
