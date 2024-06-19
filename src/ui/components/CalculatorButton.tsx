import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color: string;
  colorText: string;
  doubleSize?: boolean;
  onPress: () => void;
}
export const CalculatorButton = ({
  label,
  color,
  colorText,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text style={[styles.buttonText, {color: colorText}]}>{label}</Text>
      {/* <Text style={[styles.buttonText, {color: blackText ? 'black' : 'white'}]}>
        {label}
      </Text> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkGray,
    borderRadius: 20,
    borderColor: '#2e313a',
    borderWidth: 2,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
    shadowRadius: 20,
  },
  buttonText: {
    color: '#a5a9b3',
    fontSize: 30,
    fontWeight: '400',
    padding: 10,
    textAlign: 'center',
  },
});
