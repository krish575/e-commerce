const props = {
    key1: 'abc',
    key2: 22,
    key3: {
        a: 1,
        b: 'abc',
        c: []
    },
    key4: [{q: 'dd'},{r: 'eee'},{s: true}]
}

const { key1, ...remainingObj} = props
const a = {a: '123'}
let data;
console.log(remainingObj);

console.log({...props, data: a});


