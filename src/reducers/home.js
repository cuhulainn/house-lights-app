import { SET_KITCHEN_LIGHT_ACTION, SET_LIVING_ROOM_LIGHT_ACTION } from "../constants"


export const home = (state, action) => {
    switch (action.type) {
        case SET_KITCHEN_LIGHT_ACTION:
            return {
                ...state,
                kitchenLightOn: action.kitchenLightOn
            };
        case SET_LIVING_ROOM_LIGHT_ACTION:
            return {
                ...state,
                livingRoomLightOn: action.livingRoomLightOn
            };
        default:
            return state;
    }
}