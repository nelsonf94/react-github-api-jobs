/** Importacion de librerias */
import React from 'react';
/** Componentes */
import ControlInputRadio from './ControlInputRadio';

/**
 * Clase KeywordsJobType
 */
class KeywordsJobType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'full'
    };
  }

  handleChanges(value) {
    this.setState({selectedOption: value}, () => {
      this.props.handleChanges(value);
    });
  }

  render() {
    return (
      <div className="form-check mb-2 mr-sm-2">
        <ControlInputRadio id='full' value='full' checked={'full' === this.state.selectedOption} title={'Full Time'}
          handleChanges={(event) => this.handleChanges(event)} />
        <ControlInputRadio id='half' value='half' checked={'half' === this.state.selectedOption} title={'Halft Time'}
          handleChanges={(event) => this.handleChanges(event)} />
      </div>
    );
  }
};

export default KeywordsJobType;