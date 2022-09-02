import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout, Home } from '../screens';
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'

import Animated from 'react-native-reanimated';


const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                //backgroundcolor
            }}
        //onPress
        >
            <Image source={icon} style={{ height: 20, width: 20, tintColor: COLORS.white }} />
            <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/* close section */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.closeDrawer()}>
                        <Image source={icons.cross} style={{ height: 35, width: 35, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                </View>

                {/* profile section */}

                <TouchableOpacity
                    style={{ flexDirection: 'row', marginTop: SIZES.radius, alignItems: 'center' }}
                    onPress={() => console.log('profile')}>
                    <Image source={dummyData.myProfile?.profile_image} style={{ height: 50, width: 50, borderRadius: SIZES.radius }} />
                    <View
                        style={{ marginLeft: SIZES.radius }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{dummyData.myProfile?.slogan}</Text>
                    </View>
                </TouchableOpacity>

                {/* drawer section */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem label={constants.navigationLabels.home} icon={icons.home} />
                    <CustomDrawerItem label={constants.navigationLabels.combos} icon={icons.favourite} />
                    <CustomDrawerItem label={constants.navigationLabels.menu} icon={icons.menu} />
                    <CustomDrawerItem label={constants.navigationLabels.trackOrder} icon={icons.location} />

                    {/* line divider */}

                    <View style={{ height: 1, marginVertical: SIZES.radius, marginLeft: SIZES.radius, backgroundColor: COLORS.lightGray1 }} />
                    <CustomDrawerItem label={constants.navigationLabels.recommendAfriend} icon={icons.profile} />
                    <CustomDrawerItem label={constants.navigationLabels.settings} icon={icons.setting} />


                    <View style={{ marginBottom: SIZES.padding }} />
                    <CustomDrawerItem label={constants.navigationLabels.signout} icon={icons.logout} />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {

    const [progress, setProgress] = React.useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black
            }}>
            <Drawer.Navigator
                drawerType='slide'
                overlayColor='transparent'
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Home'
                drawerContent={props => {

                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)

                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
            >
                <Drawer.Screen name='Home'>
                    {props => <Home {...props}
                        drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>

            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer
