import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import {
  fetchAllPatientDataIfNeeded,
  fetchMostRecentObsByCode,
  fetchAllObsByCode,
  fetchAllObs,
  fetchAllConditionData,
  fetchAllMedReqData
} from '../services/fhir/FhirActions';

const mapStateToProps = (state, ownProps) => ({
  patient: state.fhirPatientData.ptData,
  // patient: ownProps.patient[0].resource,
  mostRecentObs: state.fhirObservationData.mostRecentMeasurements,
  allObsByCode: state.fhirObservationData.allMeasurementsByCode,
  external: state.externalState,
  codeList: state.fhirObservationData.codeList,
  allObsState: state.fhirObservationData,
  isFetchingAllPatientData: state.fhirPatientData.isFetchingAllPatientData,
  failedFetchPatientData: state.fhirPatientData.failedFetchPatientData,
  allConditionData: state.fhirConditionData.allCondData,
  medreqData: state.fhirMedReqData.allMedReqData
});

const mapDispatchToProps = dispatch => ({
  getPatientDemographics: patientId => dispatch(fetchAllPatientDataIfNeeded(patientId)),
  getMostRecentObsByCode: (patientID, code, subcode = null) => dispatch(fetchMostRecentObsByCode(patientID, code, subcode)),
  getAllObsByCode: (patientID, code, subcode = null) => dispatch(fetchAllObsByCode(patientID, code, subcode)),
  getAllObs: (patientID) => dispatch(fetchAllObs(patientID)),
  getAllConditionData: (patientID) => dispatch(fetchAllConditionData(patientID)),
  getAllMedReqData: (patientID) => dispatch(fetchAllMedReqData(patientID)),
});

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
