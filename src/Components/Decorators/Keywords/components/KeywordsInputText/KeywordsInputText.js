/** React Libs */
import React from 'react';
/** Aux Component */
import Aux from '../../../../../hoc/Aux';
/** Estilos */
import './KeywordsInputText.scss';

const KeywordsInputText = (props) => {
  const {id, title, placeholder, handleChanges} = props.config;
  console.log(title);
  const onChange = (event) => {
    event.persist();
    handleChanges(event.target.value);
  }

  return (
    <div id="text-input">
      <label className="title" htmlFor={`input-${id}`}>{title}</label>
      <input type="text" className="form-control mb-2 mr-sm-2" id={`input-${id}`} placeholder={placeholder} onChange={onChange} />
    </div>
  )
};

export default KeywordsInputText;
