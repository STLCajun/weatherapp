console.log('starting app');

setTimeout(() => {
    console.log('inside callback');
}, 2000);

setTimeout(() => {
    console.log('immediate');
}, 0)

console.log('finishing up');