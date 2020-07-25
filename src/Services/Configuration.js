/** Job Service */
import JobService from './Job';


/** List of Jobs */
const init = () => {
  JobService.searchJob({type: 'full', page: 1});
};

/**
 * Configuration Service
 */
const ConfigurationService = {
  init: init,
}

export default ConfigurationService;