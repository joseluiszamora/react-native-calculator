import React from 'react';
import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    formula,
    // number,
    prevNumber,
    buildNumber,
    toggleSign,
    // clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult,
    evaling,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>

        {formula === prevNumber ? (
          <Text style={styles.subResult}> </Text>
        ) : (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {prevNumber}
          </Text>
        )}
        {/* <Text
        adjustsFontSizeToFit
        numberOfLines={ 1 }
        style={ styles.subResult }>
        {  prevNumber }
      </Text> */}
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={evaling}
          label="C"
          color={colors.btnLight}
          colorText={colors.txtDark}
        />
        <CalculatorButton
          onPress={toggleSign}
          label="+/-"
          color={colors.btnLight}
          colorText={colors.txtDark}
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="del"
          color={colors.btnLight}
          colorText={colors.txtDark}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="÷"
          color={colors.btnOrange}
          colorText={colors.txtLight}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('7')}
          label="7"
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('8')}
          label="8"
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('9')}
          label="9"
        />
        <CalculatorButton
          color={colors.btnOrange}
          colorText={colors.txtLight}
          onPress={multiplyOperation}
          label="x"
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('4')}
          label="4"
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('5')}
          label="5"
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('6')}
          label="6"
        />
        <CalculatorButton
          color={colors.btnOrange}
          colorText={colors.txtLight}
          onPress={substractOperation}
          label="-"
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('1')}
          label="1"
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('2')}
          label="2"
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('3')}
          label="3"
        />
        <CalculatorButton
          color={colors.btnOrange}
          colorText={colors.txtLight}
          onPress={addOperation}
          label="+"
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton
          color={colors.btnDark}
          colorText={colors.txtDark}
          onPress={() => buildNumber('.')}
          label="."
        />
        <CalculatorButton
          color={colors.btnOrange}
          colorText={colors.txtLight}
          onPress={calculateResult}
          label="="
        />
      </View>
    </View>
  );
};
