import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import CircleComponent from '../components/circle';

const ITEM_WIDTH = 26;
const ITEM_SPACING = 10;

const HorizontalScrollList = () => {
  const circleList = Array.from({length: 10}, (_, i) => ({
    id: i + 1,
    title: `item${i + 1}`,
    value: Math.floor(Math.random() * 101),
  }));

  // 定义样式
  const styles = StyleSheet.create({
    itemContainer: {
      width: ITEM_WIDTH,
      marginRight: ITEM_SPACING, // 设置右边间距
      marginTop: 0,
    },
    lastItemContainer: {
      width: ITEM_WIDTH,
      marginRight: 0, // 最后一个元素不需要右边间距
    },
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={ITEM_WIDTH + ITEM_SPACING}
      snapToAlignment="start"
      contentContainerStyle={{paddingRight: ITEM_SPACING}} // 为最后一个元素之后的空白区域提供间距
    >
      <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
        {circleList.map((item, index) => (
          <View
            key={item.id}
            style={
              index === circleList.length - 1
                ? styles.lastItemContainer
                : styles.itemContainer
            }>
            <CircleComponent percent={item.value} radius={ITEM_WIDTH / 2} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HorizontalScrollList;
