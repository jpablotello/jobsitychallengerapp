import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import color from 'jobsitychallengeapp/src/constants/colors';

const Button = ({
  text,
  containerStyles,
  textStyles,
  disabled,
  onPress,
  showIcon = false,
  Icon,
}) => {
  if (disabled) containerStyles = styles.disabled;

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[styles.container, containerStyles]}>
        <Text style={[styles.text, textStyles]}>{text}</Text>
        {showIcon && <Icon height={9} fill={color.white} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
