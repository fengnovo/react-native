import React, {
    Component
} from 'react';
import {
    PropTypes,
    TouchableWithoutFeedback,
    ScrollView,
    Animated,
    View,
    Dimensions,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

var { width, height } = Dimensions.get('window');

// 获取json中的数据
var imageData = {
    top_stories: [
        {
            image: "https://pic1.zhimg.com/v2-0af92590e84e15d5f2aee97a763530f0.jpg",
            type: 0,
            id: 9438322,
            ga_prefix: "052608",
            title: "一碗打翻的关东煮，让扫雷女子世界冠军宣布隐退"
        },
        {
            image: "https://pic3.zhimg.com/v2-3fdbf75df44db1fc40835b3ce261a7b2.jpg",
            type: 0,
            id: 9441317,
            ga_prefix: "052607",
            title: "全新 U23 政策、限制高价外援，足协自废武功让球迷心凉"
        },
        {
            image: "https://pic1.zhimg.com/v2-63f42f2026802aeac81c123a01492e38.jpg",
            type: 0,
            id: 9438417,
            ga_prefix: "052514",
            title: "发挥近乎完美的柯洁中盘认输，第二盘棋有多精彩？"
        },
        {
            image: "https://pic4.zhimg.com/v2-8d7be740e35f675abe1e825f110375fb.jpg",
            type: 0,
            id: 9438841,
            ga_prefix: "052507",
            title: "柯洁的棋风和特点是怎样的？"
        },
        {
            image: "https://pic3.zhimg.com/v2-59a0ea6e669a54a1309fe6b90ed509ce.jpg",
            type: 0,
            id: 9439600,
            ga_prefix: "052507",
            title: "亲历台湾同志运动 20 年，同性婚姻终于不再只是美梦"
        }
    ]
};

// 视图
var Banner = React.createClass({
    // 先初始化页码,确定初始化后显示哪个页面
    getInitialState() {
        return {
            // 初始化当前页码
            currentPage: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/* 实例化ScrollView */}
                <ScrollView style={styles.scrollViewStyle}
                    horizontal={true}   // 水平方向
                    showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                    showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                    pagingEnabled={true}    // 开启分页功能
                    onMomentumScrollEnd={this.onAnimationEnd}   // 当一帧滚动完毕的时候调用
                >
                    {/* 实例化内部子视图 */}
                    {this.renderItem()}
                </ScrollView>

                {/* 实例化分页指示器 */}
                <View style={styles.pagingIndicatorStyle}>
                    {this.renderPagingIndicator()}
                </View>
            </View>
        );
    },

    // 监听滚动
    onAnimationEnd(e) {
        // 求出水平方向上的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        // 计算当前页码
        var currentPage = offSetX / width;
        // 重新绘制UI
        this.setState({
            currentPage: currentPage
        });
    },

    // 分页指示器
    renderPagingIndicator() {
        var itemAry = [], autoColor;

        // 获取json中图片
        var imgAry = imageData.top_stories;

        // 根据json数据实例化视图
        for (var i = 0; i < imgAry.length; i++) {
            // 取出单个对象
            var item = imgAry[i];

            // 跟随当前页改变对应 点 的颜色
            autoColor = (this.state.currentPage === i) ? { color: 'orange' } : { color: 'white' }

            // 将子视图放进 itemAry
            itemAry.push(
                // 实例化视图
                <Text key={i} style={[{ fontSize: 30 }, autoColor]}>&bull;</Text>
            )
        }

        // 返回数组
        return itemAry;
    },

    // scrollView子视图
    renderItem() {
        var itemAry = [];

        // 获取json中图片
        var imgAry = imageData.top_stories;

        // 根据json数据实例化视图
        for (var i = 0; i < imgAry.length; i++) {
            // 取出单个对象
            var item = imgAry[i];
            // 将子视图放进 itemAry
            itemAry.push(
                // 实例化子视图
                <Image key={i} style={styles.itemStyle} source={{ uri: item.image }} />
            )
        }

        // 返回数组
        return itemAry;
    },
});

// 样式
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },

    scrollViewStyle: {
    },

    itemStyle: {
        // 尺寸
        width: width,
        height: 160,
        // 图片等比例拉伸
        // resizeMode: 'contain'
    },

    pagingIndicatorStyle: {
        // 背景色(使背景色为全透明)
        backgroundColor: 'rgba(255,255,255,0.0)',
        // 尺寸
        width: width,
        // 主轴方向与对齐方式
        flexDirection: 'row',
        justifyContent: 'center',
        // 绝对定位,使页码指示器盖在scrollView上面
        position: 'absolute',
        bottom: 0
    }
});

export default Banner;
