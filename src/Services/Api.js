/** Url del api GITHUB_API */
const GITHUB_API = 'https://jobs.github.com/positions.json?markdown=false';

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

    if (params.page) {
      urlParameters += `&page=${params.page}`;
    } else {
      urlParameters += '&page=1';
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

/*****************************************************************/

/**
 * Api Service
 */
const Api = {
  searchJob: searchJob
}


export default Api;
