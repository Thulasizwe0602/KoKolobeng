import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Animated from 'react-native-reanimated';

const Menu = ({drawerAnimationStyle}) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            <Text>Menu</Text>
        </Animated.View>
    )
}

export default Menu;