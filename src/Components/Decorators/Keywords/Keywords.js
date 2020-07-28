/** import React */
import React from 'react';
/** Components */
import KeywordsInputText from './components/KeywordsInputText/KeywordsInputText';
import KeywordsJobType from './components/KeywordsJobType/KeywordsJobType';
/** css */
import './Keywords.scss';
/** Job Service */
import JobService from '../../../Services/Job';

/**
 * Clase Keywords
 */
class Keywords extends React.Component {

  constructor(props) {
    super(props);

    this.keywords = {
      description: '',
      location: '',
      type: 'full'
    };
  }

  /**
   * Create params for description component
   */
  initJobDescription() {
    this.jobDescription = {
      id: 'descripcion',
      title: 'Description',
      placeholder: 'Filter by title, company, benefits...',
      handleChanges: (event) => this.handleChangesJobDescription(event)
    }
  }

  /**
   * Create params for Location component
   */
  initJobLocation() {
    this.jobLocation = {
      id: 'location',
      title: 'Location',
      placeholder: 'Filter by Country, Sity, State, Zip code...',
      handleChanges: (event) => this.handleChangesJobLocation(event)
    }
  }

  /**
   * Handler event
   * @param {*} event
   */
  handleChangesJobDescription(event) {
    this.keywords.description = event;
  }

  /**
   * Handler event
   * @param {*} event
   */
  handleChangesJobLocation(event) {
    this.keywords.location = event;
  }

  /**
   * Handler event
   * @param {*} event
   */
  handleChangesJobType(event) {
    this.keywords.type = event;
  }

  /**
   * On Search
   */
  onSearch() {
    JobService.searchJob(this.keywords);
  }

  render() {

    this.initJobDescription();
    this.initJobLocation();

    return (
      <section className="d-flex flex-row-reverse">
        <form className="form-inline">
          <KeywordsInputText config={this.jobDescription} />
          <KeywordsInputText config={this.jobLocation} />
          <KeywordsJobType handleChanges={(event) => this.handleChangesJobType(event)}/>
          <button className="btn btn-primary mb-2" onClick={() => this.onSearch()}>Search</button>
        </form>
      </section>
    )
  }
};

export default Keywords;