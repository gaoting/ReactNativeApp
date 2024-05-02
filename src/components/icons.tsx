import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from '../types/index';

MaterialCommunityIcons.loadFont();

const IconComponent: React.FC<IconProps> = ({
  name,
  size=24,
  color='blank',
  style,
  ...rest
}) => {
  return (
    <View style={style}>
      <MaterialCommunityIcons name={name} color={color} size={size} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IconComponent;
