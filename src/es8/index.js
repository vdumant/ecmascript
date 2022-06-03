//es8: Object.entries, .values, string.padStar, '{:,}', async

const data = {
    frontend: 'Luis',
    backend: 'Juan'
}

const entries = Object.entries(data);
console.log(entries)

const values = Object.values(data);
console.log(values)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello world'), 3000)
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()