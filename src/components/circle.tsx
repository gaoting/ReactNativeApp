import ProgressCircle from 'react-native-progress-circle';
import {CicleProps} from '../types/index';
import {StyleSheet, View} from 'react-native';


const CircleComponent: React.FC<CicleProps> = ({
  percent,
  radius,
  borderWidth = 2,
  color = '#3399FF',
  shadowColor = '#999',
  bgColor = '#fff',
  ...rest
}) => {
  return (
    <View>
      <ProgressCircle
        percent={percent}
        radius={radius}
        borderWidth={borderWidth}
        color={color}
        shadowColor={shadowColor}
        bgColor={bgColor}
        {...rest}></ProgressCircle>
    </View>
  );
};
const styles = StyleSheet.create({});

export default CircleComponent;
