import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { fhirPatientData } from './services/fhir/FhirReducers'
import { envFactorsData } from './views/profile/env/EnvReducers'

var rootReducer = combineReducers({
  routing, fhirPatientData, envFactorsData
});

export default rootReducer;