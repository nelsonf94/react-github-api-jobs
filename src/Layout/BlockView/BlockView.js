/** React imports */
import React from 'react';
/** Block Ui Component */
import BlockUi from 'react-block-ui';
/** Block ui styles */
import 'react-block-ui/style.css';

/**
 * Block all view
 * @param {*} props
 */
const BlockView = (props) => {

  return (
    <BlockUi tag="div" blocking={props.blocking} message="Loading, please wait">
      {props.children}
    </BlockUi>
  )
}

export default BlockView;
