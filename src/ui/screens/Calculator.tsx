import React from 'react';
import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {MainCalculator} from '../hooks/calculator';

export const Calculator = () => {
  const {
    formula,
    result,
    preResult,
    pressNumber,
    pressOperator,
    pressDot,
    pressEqual,
    pressAction,
    formatDecimal,
  } = MainCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {/* Results Section */}
      <View style={styles.resultContainer}>
        {preResult.toString() !== '0' && (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            = {formatDecimal(preResult)}
          </Text>
        )}
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>

        {result !== '0' && (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.mainResult}>
            = {result}
          </Text>
        )}
      </View>
      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {['C', 'DEL', '%'].map(val => {
            return (
              <CalculatorButton
                key={val}
                onPress={() => {
                  pressAction(val);
                }}
                label={val}
                color={colors.btnLight}
                colorText={colors.txtDark}
              />
            );
          })}
          <CalculatorButton
            onPress={() => {
              pressOperator('/');
            }}
            label="/"
            color={colors.btnOrange}
            colorText={colors.txtLight}
          />
        </View>

        <View style={styles.row}>
          {[7, 8, 9].map(val => {
            return (
              <CalculatorButton
                key={val}
                color={colors.btnDark}
                colorText={colors.txtDark}
                onPress={() => pressNumber(val)}
                label={val.toString()}
              />
            );
          })}
          <CalculatorButton
            onPress={() => {
              pressOperator('*');
            }}
            label="*"
            color={colors.btnOrange}
            colorText={colors.txtLight}
          />
        </View>

        <View style={styles.row}>
          {[4, 5, 6].map(val => {
            return (
              <CalculatorButton
                key={val}
                color={colors.btnDark}
                colorText={colors.txtDark}
                onPress={() => pressNumber(val)}
                label={val.toString()}
              />
            );
          })}
          <CalculatorButton
            onPress={() => {
              pressOperator('-');
            }}
            label="-"
            color={colors.btnOrange}
            colorText={colors.txtLight}
          />
        </View>

        <View style={styles.row}>
          {[1, 2, 3].map(val => {
            return (
              <CalculatorButton
                key={val}
                color={colors.btnDark}
                colorText={colors.txtDark}
                onPress={() => pressNumber(val)}
                label={val.toString()}
              />
            );
          })}
          <CalculatorButton
            onPress={() => {
              pressOperator('+');
            }}
            label="+"
            color={colors.btnOrange}
            colorText={colors.txtLight}
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            color={colors.btnDark}
            colorText={colors.txtDark}
            onPress={() => pressNumber(0)}
            label="0"
          />
          <CalculatorButton
            color={colors.btnDark}
            colorText={colors.txtDark}
            onPress={() => pressDot()}
            label="."
          />
          <CalculatorButton
            color={colors.btnOrange}
            colorText={colors.txtLight}
            onPress={() => pressEqual()}
            label="="
            doubleSize
          />
        </View>
      </View>
    </View>
  );
};
