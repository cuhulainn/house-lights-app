import {SET_KITCHEN_LIGHT_ACTION} from './constants';
import {SET_LIVING_ROOM_LIGHT_ACTION} from './constants';

export const setKitchenLight = (kitchenLightOn) => ({ 
    type: SET_KITCHEN_LIGHT_ACTION,
    kitchenLightOn
});

export const setLivingRoomLight = (livingRoomLightOn) => ({ 
    type: SET_LIVING_ROOM_LIGHT_ACTION,
    livingRoomLightOn
});
