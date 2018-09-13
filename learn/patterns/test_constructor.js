var a = new Object(),
    b = new Object(1),
    c = Object(''),
    d = Object(true);

console.log(a.constructor)
console.log(b.constructor)
console.log(c.constructor)
console.log(d.constructor)