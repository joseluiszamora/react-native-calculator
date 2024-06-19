import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles, colors} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
}
export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};
