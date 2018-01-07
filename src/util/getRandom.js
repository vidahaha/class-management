export const getRan = ( arg ) => {
	if( arg instanceof Array ) return arg[Math.floor(Math.random()*arg.length)];
}