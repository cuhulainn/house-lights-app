import { connect } from 'react-redux';
import { Home } from './Home';
import {setKitchenLight, setLivingRoomLight} from "./actions";

const mapStateToProps = (state) => ({
    livingRoomLightOn: state.livingRoomLightOn,
    kitchenLightOn: state.kitchenLightOn
});

const mapDispatchToProps = {
    handleSetKitchenSwitch: setKitchenLight,
    handleSetLivingRoomSwitch: setLivingRoomLight
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);