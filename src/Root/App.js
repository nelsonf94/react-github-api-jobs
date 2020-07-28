/** Import React */
import React from 'react';
/** Application Layout */
import Layout from '../Layout/Layout/Layout';

/** Job Service */
import JobService from '../Services/Job';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  componentDidMount() {
    JobService.isLoading.subscribe((isLoading) => {
      this.setState({isLoading: isLoading});
    });
  }

  render() {
    let {isLoading} = this.state;

    return (
      <Layout isLoading={isLoading}></Layout>
    );
  }
}
export default App;
