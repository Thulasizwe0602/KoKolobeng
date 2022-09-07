import React from 'react';
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'
import {
    View,
    Text
} from 'react-native';
import Animated from 'react-native-reanimated';

const TrackOrder = ({drawerAnimationStyle}) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            <Text>Track your order</Text>
        </Animated.View>
    )
}

export default TrackOrder;