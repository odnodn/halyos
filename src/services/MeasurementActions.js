export const ADD_FUTURE_BY_MEASUREMENT = 'ADD_FUTURE_BY_MEASUREMENT';
export const ADD_PRESENT_BY_MEASUREMENT = 'ADD_PRESENT_BY_MEASUREMENT';
export const SET_TIME_PERIOD = 'SET_TIME_PERIOD';


export function addFutureMeasurement(code, value) {
	return {
		type: ADD_FUTURE_BY_MEASUREMENT,
		code:code,
		future_value:value
	}
}

export function addPresentMeasurement(code, value) {
	return {
		type: ADD_PRESENT_BY_MEASUREMENT,
		code:code,
		future_value:value
	}
}

export function setTimePeriod(time) {
	return {
		type: SET_TIME_PERIOD,
		periodOfTime: time
	}
}
