console.error('Alert');

console.warn('warning');

console.table({name: 'Brad', email:'brad@gmail.com'});

console.group('simple');
console.error('Alert');
console.warn('warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);