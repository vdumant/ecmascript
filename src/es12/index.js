//es12: replaceAll, # metodo privado, Promise.any (primer promesa resuelta),
// anyClass, weakRef
const string = 'javascript es maravilloso'
const replaceString = string.replaceAll('javascript', 'python')
console.log(replaceString);

class Message {
    #show(val) {
        console.log(val);
    }
}

const message = new Message
message.show('hola')

const promise1 = new Promise((resolve, reject) => reject('1'))
const promise2 = new Promise((resolve, reject) => resolve('2'))

Promise.any([promise1, promise2])
    .then(res => console.log(res))