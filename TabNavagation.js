
import React, { PureComponent } from 'react'
import {
    Image,
} from 'react-native'

import { createBottomTabNavigator } from 'react-navigation'

import First from './First'
import second from './second'
import Third from './Third'

const MainTab = createBottomTabNavigator(
    {

        First: {
            screen: First,
            navigationOptions: ({navigation, screenProps}) => ({
                tabBarLabel: '球队',
                headerStyle: {
                    backgroundColor: 'red',
                },
                // tabBarIcon: (({tintColor, focused}) => {
                //     return (
                //         focused ? <Image
                //                 source={Images.team001}
                //                 style={[{height: 28, width: 28}]}/> :
                //             <Image
                //                 source={Images.team002}
                //                 style={[{height: 28, width: 28}]}/>
                //     )
                // }), // 设置标签栏的图标。需要单独设置。
            }),
        },

        second: {
            screen: second,
            navigationOptions: ({navigation, screenProps}) => ({
                header: null,
                headerTitle: '资讯',
                headerTitleStyle: {
                    alignSelf: 'center',
                    color: 'red',
                },
                tabBarLabel: '资讯',
                // tabBarIcon: (({tintColor, focused}) => {
                //     return (
                //         focused ? <Image
                //                 source={Images.information001}
                //                 style={[{height: 28, width: 28}]}/> :
                //             <Image
                //                 source={Images.information002}
                //                 style={[{height: 28, width: 28}]}/>
                //     )
                // }), // 设置标签栏的图标。需要单独设置。
            }),
        },
        Third: {
            screen: Third,
            navigationOptions: ({navigation, screenProps}) => ({
                header: null,
                headerTitle: '榜单',
                headerTitleStyle: {
                    alignSelf: 'center',
                    color: 'red',
                },
                tabBarLabel: '榜单',
                // tabBarIcon: (({tintColor, focused}) => {
                //     return (
                //         focused ? <Image
                //                 source={Images.rank001}
                //                 style={[{height: 28, width: 28}]}/> :
                //             <Image
                //                 source={Images.rank002}
                //                 style={[{height: 28, width: 28}]}/>
                //     )
                // }), // 设置标签栏的图标。需要单独设置。
            }),
        },
    },
    {
        // tabBarComponent: TabBarComponent,
        animationEnabled: false, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', //bottom 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'red', // 文字和图片选中颜色
            inactiveTintColor: 'red', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            upperCaseLabel: false, // 是否使标签大写，默认为true。
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                overflow: 'visible',
                shadowColor: 'red',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.5,
                backgroundColor: 'red',
                elevation: 4,
            },
            labelStyle: {
                fontSize: 13, // 文字大小
            },
        },
    }
)

// MainTab.navigationOptions = ({navigation}) => {
//     const component = MainTab.router.getComponentForState(navigation.state)
//     if (typeof component.navigationOptions === 'function'){
//         return component.navigationOptions({navigation})
//     }
//     return component.navigationOptions
// }
//
//
export default MainTab