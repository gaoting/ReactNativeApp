import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconComponent from '../components/icons';
import {TaskProps} from '../types/index';

const TaskItem: React.FC<TaskProps> = ({
  backgroundColor,
  name,
  color = 'gray',
  size = 26,
  title,
  num,
  all,
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'space-around',
      }}>
      <View>
        <IconComponent name={name} color={color} size={size} />
        <Text>{{title}}</Text>
      </View>
      <Text>
        {{num}}/{{all}}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TaskItem;
