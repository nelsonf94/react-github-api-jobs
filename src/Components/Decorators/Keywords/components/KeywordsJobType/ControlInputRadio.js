/** React Libs */
import React from 'react';
/** Aux Component */
import Aux from '../../../../../hoc/Aux';
/** Css */
import './ControlInputRadio.scss';

const ControlInputRadio = (props) => {
  const {id, title, value, checked, handleChanges} = props;

  const onChange = (event) => {
    event.persist();
    handleChanges(event.target.value);
  }

  return (
    <Aux>
      <input className="form-check-input" type="radio" id={`radio-${id}`} value={value} checked={checked} onChange={onChange} />
      <label className="form-check-label" htmlFor={`radio-${id}`}>{title}</label>
    </Aux>
  );
};

export default ControlInputRadio;
