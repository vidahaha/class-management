export const getLen = ( arg ) => {
	if( typeof arg === 'object') return Object.keys( arg ).length;
}