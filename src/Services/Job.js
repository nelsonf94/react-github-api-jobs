/** rxjs Lib  */
import {Subject} from 'rxjs';
/** Api Service */
import Api from './Api';

/** List of Jobs */
const jobsList = new Subject();
/** Loader Spinner */
const isLoading = new Subject();


/** Current Filters or params to search jobs */
let currentSearchParams = null;

/**
 * Search Jobs
 * @param {*} params
 */
const searchJob = async (params) => {
  try {
    isLoading.next(true);
    currentSearchParams = params;
    const result = await Api.searchJob(params);
    jobsList.next(result);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.next(false);
  }
}

/**
 * Next Page of Jobs
 * @param {*} params
 */
const nextPageCurrentSearch = async () => {
  try {
    isLoading.next(true);
    currentSearchParams.page = (currentSearchParams.page) ? currentSearchParams.page + 1 : 1;
    const result = await Api.searchJob(currentSearchParams);
    jobsList.next(result);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.next(false);
  }
}

/**
 * Job Service
 */
const JobService = {
  jobsList: jobsList.asObservable(),
  isLoading: isLoading.asObservable(),
  searchJob: searchJob,
  nextPageCurrentSearch: nextPageCurrentSearch
};

export default JobService;