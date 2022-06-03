//es10: flat, flatmap, trimstart, Object.fromEntries(
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
console.log(array.flat(2))

let array2 = [1, 2, 3]
console.log(array2.flatMap(value => [value, value * 2]))

let hello = ' hello world'
console.log(hello.trimStart())

try {

} catch {
    console.error(error);
}

let entries = [['name', 'luis'], ['age', '23']]
console.log(Object.fromEntries(entries))