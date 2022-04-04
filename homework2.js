//Then when you want to use the contact() function in another file,
// you can simply import the function. For example, in homework2.js
// file:

import { contact, contact1} from './homework.js';

contact('Stacey', 33);
// The name is Stacey. And age is 33

console.log(contact1)