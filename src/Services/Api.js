/** Url del api GITHUB_API */
const GITHUB_API = 'https://jobs.github.com/positions.json?markdown=true';

/*****************************************************************/

/**
 * Execute the fetch action
 */
const get = async (urlParameters) => {
  try {
    const response = await fetch(`${GITHUB_API}${urlParameters}`);
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
  try {
    let urlParameters = '';
    if (params.lat || params.long) {

      if (!params.lat || !params.long) {
        throw 'Error creando parametros';
      }

      if (params.location) {
        delete params.location;
      }

      urlParameters += `&lat=${params.lat}&long=${params.long}`;
    }

    if (params.page) {
      urlParameters += `&page=${params.page}`;
    }

    if (params.type) {
      urlParameters += `&full_time=${(params.type === 'full') ? true : false}`;
    }

    if (params.description) {
      urlParameters += `&description=${params.description}`;
    }

    if (params.location) {
      urlParameters += `&location=${params.location}`;
    }

    return urlParameters;
  } catch (error) {
    throw error;
  }
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
    throw error;
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
    throw error;
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
