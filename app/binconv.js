/*export default */ function binconv(type, number) {
  try {
    switch (type) {
      case "dectobin": {
        let remainders = [];
        let quotient = number;
        for (quotient; quotient > 0; ) {
          remainders.push(Math.round(quotient % 2));
          quotient /= 2;
          console.log(quotient);
        }
        console.log(remainders, quotient);
        break;
      }

      case "bintodec": {
        break;
      }
    }
  } catch (err) {
    console.log(err);
  }

  return "ffjfjf";
}
binconv("dectobin", 1);
