import {evaluate} from 'mathjs';
import {useEffect, useState} from 'react';

const operators = ['+', '-', '*', '/'];
export const MainCalculator = () => {
  const [formula, setFormula] = useState('0');
  const [preResult, setPreResult] = useState('0');
  const [result, setResult] = useState('0');
  // const [operator, setOperator] = useState(null);
  // const [number, setNumber] = useState('123');
  // const [prevNumber, setPrevNumber] = useState('456');

  // const lastOperation = useRef<Operator>();

  // useEffect(() => {
  //   if (lastOperation.current) {
  //     const firstFormulaPart = formula.split(' ').at(0);
  //     setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
  //   } else {
  //     setFormula(number);
  //   }
  // }, [number]);

  useEffect(() => {
    // evitar que se evalue con un simbolo al final
    const lastval = formula.slice(-1);
    if (!operators.includes(lastval)) {
      setPreResult(evaluate(formula));
    }
  }, [formula]);

  // const clean = () => {
  //   setNumber('0');
  //   setPrevNumber('0');
  //   lastOperation.current = undefined;
  //   setFormula('');
  // };

  // Format number to decimal
  const formatDecimal = (number: string) => {
    // Convertir a número por si acaso se pasa un string
    const num = Number(number);

    // Verificar si es un número válido
    if (isNaN(num)) {
      return 'Número inválido';
    }

    // Verificar si el número tiene parte decimal
    if (Number.isInteger(num)) {
      return num.toString(); // Devolver el número sin cambios si es entero
    } else {
      // Formatear a 10 decimales y eliminar ceros finales
      return num.toFixed(10).replace(/\.?0+$/, '');
    }
  };

  const validateInput = (text: string) => {
    const regex =
      /^(?!0\d)(\d+\.?\d*|\.\d+|[-+*/%])(?:(?![-+*/%]{2})[-+*/%]?(?!0\d)(\d+\.?\d*|\.\d+))*$/;
    return regex.test(text);
  };

  const pressNumber = (numb: number) => {
    var newval = formula.concat(numb.toString());
    if (formula === '0') {
      newval = numb.toString();
    }
    console.log(newval);
    if (validateInput(newval)) {
      setFormula(newval);
    } else {
      console.log('Error in Validate');
    }
  };

  const pressOperator = (op: String) => {
    const newVal = formula.concat(op.toString());
    setFormula(newVal);
  };
  const pressDot = () => {
    // const lastDotIndex = formula.lastIndexOf('.');
    // console.log('Index: ', lastDotIndex);

    // if (lastDotIndex === -1) {
    //   // no existe punto
    //   console.log('Primer punto');
    // }

    var newval = formula.concat('.');

    console.log(newval);
    if (validateInput(newval)) {
      setFormula(newval);
    } else {
      console.log('Error in Validate');
    }
    // const lastval = formula.slice(-1);
    // if (lastval !== '.') {
    //   setFormula(formula.concat('.'));
    // }
  };
  const pressEqual = () => {
    setResult(preResult);
    setPreResult('0');
  };
  const pressAction = (action: String) => {
    if (action === 'C') {
      setFormula('0');
      setResult('0');
      setPreResult('0');
    }
    if (action === 'DEL') {
      const val = formula.substring(0, formula.length - 1);
      setFormula(val);
    }
    if (action === '%') {
      setFormula(formula + '%');
    }
  };

  // Borrar el último número
  // const deleteOperation = () => {
  //   let currentSign = '';
  //   let temporalNumber = number;

  //   if (number.includes('-')) {
  //     currentSign = '-';
  //     temporalNumber = number.substring(1); // 88
  //   }

  //   if (temporalNumber.length > 1) {
  //     return setNumber(currentSign + temporalNumber.slice(0, -1)); //
  //   }

  //   setNumber('0');
  // };

  // const toggleSign = () => {
  //   if (number.includes('-')) {
  //     return setNumber(number.replace('-', ''));
  //   }

  //   setNumber('-' + number);
  // };

  // const buildNumber = (numberString: string) => {
  //   if (number.includes('.') && numberString === '.') return;

  //   if (number.startsWith('0') || number.startsWith('-0')) {
  //     // Punto decimal
  //     if (numberString === '.') {
  //       return setNumber(number + numberString);
  //     }

  //     // Evaluar si es otro cero y no hay punto
  //     if (numberString === '0' && number.includes('.')) {
  //       return setNumber(number + numberString);
  //     }

  //     // Evaluar si es diferente de cero, no hay punto, y es el primer numero
  //     if (numberString !== '0' && !number.includes('.')) {
  //       return setNumber(numberString);
  //     }

  //     // Evitar 000000.00
  //     if (numberString === '0' && !number.includes('.')) {
  //       return;
  //     }

  //     return setNumber(number + numberString);
  //   }

  //   setNumber(number + numberString);
  // };

  // const setLastNumber = () => {
  //   calculateResult();

  //   if (number.endsWith('.')) {
  //     setPrevNumber(number.slice(0, -1));
  //   } else {
  //     setPrevNumber(number);
  //   }

  //   setNumber('0');
  // };

  // const divideOperation = () => {
  //   setLastNumber();
  //   lastOperation.current = Operator.divide;
  // };

  // const multiplyOperation = () => {
  //   setLastNumber();
  //   lastOperation.current = Operator.multiply;
  // };

  // const substractOperation = () => {
  //   setLastNumber();
  //   lastOperation.current = Operator.subtract;
  // };

  // const addOperation = () => {
  //   setLastNumber();
  //   lastOperation.current = Operator.add;
  // };

  // const calculateResult = () => {
  //   const result = calculateSubResult();
  //   setFormula(`${result}`);

  //   lastOperation.current = undefined;
  //   setPrevNumber('0');
  // };

  // const calculateSubResult = (): number => {
  //   const [firstValue, operation, secondValue] = formula.split(' ');

  //   const num1 = Number(firstValue);
  //   const num2 = Number(secondValue); //NaN

  //   if (isNaN(num2)) return num1;

  //   switch (operation) {
  //     case Operator.add:
  //       return num1 + num2;

  //     case Operator.subtract:
  //       return num1 - num2;

  //     case Operator.multiply:
  //       return num1 * num2;

  //     case Operator.divide:
  //       return num1 / num2;

  //     default:
  //       throw new Error('Operation not implemented');
  //   }
  // };

  return {
    // Properties
    formula,
    result,
    preResult,
    // number,
    // prevNumber,

    // Methods
    formatDecimal,
    //setOperator,
    pressNumber,
    pressOperator,
    pressDot,
    pressEqual,
    pressAction,
  };
};
