import {add} from './app.mjs';
import assert from 'assert';

console.log(`add() - Should add two numbers`);

try {
    assert.strictEqual(add(1,2), 3);
}catch (e) {
    console.log('FAIL');
    console.log(e);
}