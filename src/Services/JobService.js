/** Api Service */
import Api from './Api';
/** rxjs Lib  */
import {Subject} from 'rxjs';

/** List of Jobs */
const jobsList = new Subject();

/**
 * Search Jobs
 * @param {*} params
 */
const searchJob = async (params) => {
  return await Api.searchJob(params);
}


/**
 * Job Service
 */
const JobService = {
  jobsList: () => jobsList.asObservable(),
  searchJob: searchJob
};

export default JobService;