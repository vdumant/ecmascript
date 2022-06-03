//es11: import( DINAMIC IMPORT

/*BigInt
Promise.allSettled()
globalThis
Nullish coalescing operator (??)
Optional chaining (?.)
 Big INT: permite */
const button = document.getElementById('btn')

button.addEventListener('click', async function () {
    const module = await import('./file.js')
    module.hello()
})