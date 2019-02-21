import {
    Platform,
    Animated
} from 'react-native'



// 默认横向跳转
// 如果即将要跳转到的页面需要其它跳转方式
// 可在路由参数中传入 transition参数，可选值有：forHorizontal,forVertical,forFadeFromBottomAndroid,forFade
// 示例定义竖向跳转：this.props.navigation.push('ProdDetail', {'prodID': item.id, 'transition':'forVertical'})
// const screenInterpolater = (sceneProps) => {
//     const { route } = sceneProps.scene;
//     const params = route.params || {};
//     const transition = params.transition || 'forHorizontal';
//     return CardStackStyleInterpolator[transition](sceneProps);
// };

const TransitionConfiguration = () => ({
    transitionSpec: {
        duration: 200,
        timing: Animated.timing,
    },
});

const StackNavigationConfig = {
    initialRouteName: 'MainTab',
    navigationOptions:{
        cardStack: {
            gesturesEnabled: true
        },
        headerStyle: {
            backgroundColor: Platform.OS === 'android' && Platform.Version <= 22 ? 'black' : 'black',
        },
        headerTitleStyle: {
            fontSize: 20,
            color: Platform.OS === 'android' && Platform.Version <= 22 ? 'black' : 'black',
            alignSelf: 'center'
        },
        headerBackTitleStyle: {
            fontSize: 18,
            color: 'black',
        },
        headerBackTitle: '返回',
        headerTintColor: 'black',
        //gesturesEnabled:true,//是否滑动关闭页面
        //gestureResponseDistance:{horizontal:300}
    },
    mode: 'card',//modal  card
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏,
    transitionConfig:TransitionConfiguration
}

export default StackNavigationConfig;