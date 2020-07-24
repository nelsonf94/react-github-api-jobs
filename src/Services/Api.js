/** Url del api GITHUB_API */
const GITHUB_API = 'https://jobs.github.com/positions.json?markdown=true';

/*****************************************************************/

/**
 * Execute the fetch action
 */
const get = (urlParameters) => {
  try {
    const response = await fetch(`${GITHUB_API}&${urlParameters}`);
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/*****************************************************************/

/**
 * Create the URL parameters to Search for jobs
 */
const searchJob_UrlParameters = (params) => {
  const urlParameters = '';
  return urlParameters;
}

/**
 * Create the URL parameters to view some job
 */
const viewJob_urlParameters = (id) => {
  const urlParameters = '';
  return urlParameters;
}

/*****************************************************************/

/**
 * Search Jobs
 */
const searchJob = async (params) => {
  try {
    const urlParameters = searchJob_UrlParameters(params);
    const result = await get(urlParameters);
    return result;
  } catch (error) {
    throw {error: 'danger', message: 'Algun mensaje'};
  }
}

/**
 * View Information about Some Job
 * @param {*} jobId
 */
const viewJob = async (id) => {
  try {
    const urlParameters = viewJob_urlParameters(id);
    const result = await get(urlParameters);
    return result;
  } catch (error) {
    throw {error: 'danger', message: 'Algun mensaje'};
  }
}

/*****************************************************************/

/**
 * Api Service
 */
const Api = {
  searchJob: searchJob,
  viewJob: viewJob
}


export default Api;
