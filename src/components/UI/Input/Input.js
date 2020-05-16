import React from 'react';
import Classes from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  let validationError = null;

  const inputClasses = [Classes.InputElement];

  if(props.invalid && props.shouldValidate && props.touched){
    inputClasses.push(Classes.Invalid);
  validationError=<p className={Classes.ValidationError}>Please enter a valid {props.valueType}</p>;
  }
  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig}
        value={props.value} onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={inputClasses.join(' ')}
        {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = (
        <select className={inputClasses.join(' ')} value={props.value}
          onChange={props.changed}>

          {props.elementConfig.options.map(option => (
            <option key={option.displayValue} value={option.value}>{option.displayValue}</option>
          ))}

        </select>
      );
      break;
    default:
      inputElement = <input className={inputClasses.join(' ')}
        {...props.elementConfig} value={props.value} onChange={props.changed} />;
  }

  return (
    <div className={Classes.Input}>
      <label className={Classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  )
}

export default Input
