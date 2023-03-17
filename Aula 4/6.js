const mdc = (n1, n2) => {
    if (n2 === 0) {
        return n1;
    } else {
        return mdc(n2, (n1 % n2))
    }
}

console.log(mdc(24, 9))
console.log(mdc(30, 20))