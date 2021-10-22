function print() {
  console.log('print')
}

function printImmediately(x) {
  x();
}

printImmediately(print)