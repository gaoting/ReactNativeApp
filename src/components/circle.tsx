import ProgressCircle from 'react-native-progress-circle';
import {Text} from 'react-native';

const Circle = props => {
  return (
    <ProgressCircle
      percent={props.percent}
      radius={props.radius}
      borderWidth={5}
      color="#3399FF"
      shadowColor="#999"
      bgColor="#fff"></ProgressCircle>
  );
};

export default Circle;

