/**
 * NOTE: we will be using the ecma-script keyword "export" this is very similar the the common-js keyword "exports" 
 * 			do not get this confused as they are two different things
 */

const createThing = () => {
	console.log('i created a thing');
}

const deleteThing = () => {
	console.log('i deleted a thing');
}

export default {
	createThing,
	deleteThing
}