/** rxjs Lib  */
import {Subject} from 'rxjs';
/** Api Service */
import Api from './Api';
/** Alerts Service */
import AlertsService from './AlertsService';

/** List of Jobs */
const jobsList = new Subject();

/**
 * Search Jobs
 * @param {*} params
 */
const searchJob = async (params) => {
  try {
    return await Api.searchJob(params);
  } catch (error) {
    AlertsService.showAlert(error);
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