function newFunction(name, age, country) {
    var name = name || 'vduman'
    var age = age || 31
    var country = country || 'EC'
    console.log(name, age, country)
}

//es6

function newFunction2(name = 'vduman', age = 31, country = 'EC') {
    console.log(name, age, country)

}

newFunction2();


import { hello } from './module';

hello();