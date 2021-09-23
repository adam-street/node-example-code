// create a object to share
const name = 'Jane Doe';
const age = 32;
const action = () => {
	console.log('Hello from the object module!');
}

// tell node what you want to export!
module.exports = {
	name,
	age,
	action
};