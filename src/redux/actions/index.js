/** 
* Action Types
*/
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const DOS_INCREMENT = "DOS_INCREMENT";
export const DOS_DECREMENT = "DOS_DECREMENT";

/**
 * Action Creators
 */
export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });

export const incrementDosCounter = () => ({ type: DOS_INCREMENT });
export const decrementDosCounter = () => ({ type: DOS_DECREMENT });
