//es9: ...all (spread operator), .finally(), regexData

const obj = {
    name: 'vduman',
    age: 31
}

let { name, ...all } = obj

console.log(name, all)

const obj1 = {
    ...obj,
    conuntry: 'EC'
}

console.log(obj1)