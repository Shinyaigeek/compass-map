import * as actionTypes from '../utils/actionTypes';

export const changePrefecture = (prefecture:string) => ({
    type: actionTypes.CHANGE_PREFECTURE,
    prefecture
})
