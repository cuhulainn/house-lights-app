import React from 'react';
import {Room} from "./Room";
import {LightSwitch} from "./LightSwitch";
import PropTypes from 'prop-types';

export const Home = ({ homeName = "Home", kitchenLightOn, livingRoomLightOn, handleSetKitchenSwitch, handleSetLivingRoomSwitch }) => ( // Could be just (props), this is 'destructuring' so you don't have to do props.homeName below
    <div className={'home-container'}>
        <div className={'title'}>{homeName}</div>
        <LightSwitch on={false} containerCssClass={'master-switch'}/>
        <Room lightOn={kitchenLightOn} roomName={'Kitchen'} containerCssClass={"room-1"}/>
        <Room lightOn={livingRoomLightOn} roomName={'Living Room'} containerCssClass={"room-2"}/>
        <Room lightOn={false} roomName={'Bedroom'} containerCssClass={"room-3"}/>
        <LightSwitch on={kitchenLightOn} handleToggle={handleSetKitchenSwitch} containerCssClass={'room-1-switch'}/>
        <LightSwitch on={livingRoomLightOn} handleToggle={handleSetLivingRoomSwitch}containerCssClass={'room-2-switch'}/>
        <LightSwitch on={false} containerCssClass={'room-3-switch'}/>
    </div>
);

Home.propTypes = {
    homeName: PropTypes.string,
    kitchenLightOn: PropTypes.bool.isRequired,
    livingRoomLightOn: PropTypes.bool.isRequired,
    handleSetKitchenSwitch: PropTypes.func.isRequired,
    handleSetLivingRoomSwitch: PropTypes.func.isRequired
};