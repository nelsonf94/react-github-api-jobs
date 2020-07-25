/** rxjs Lib  */
import {Subject} from 'rxjs';
/** Api Service */
import Api from './Api';
/** Alerts Service */
import AlertService from './Alert';

/** List of Jobs */
const jobsList = new Subject();

/**
 * Search Jobs
 * @param {*} params
 */
const searchJob = async (params) => {
  try {
    const result = await Api.searchJob(params);
    jobsList.next(result);
  } catch (error) {
    AlertService.showAlert(error);
  }
}


/**
 * Job Service
 */
const JobService = {
  jobsList: jobsList.asObservable(),
  searchJob: searchJob
};

export default JobService;