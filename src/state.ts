import stateList from './assets/state.json';
import { findEntryByCode, findStateByCodeAndCountryCode, compare } from './utils';
import { IState } from './interface';

// Get a list of all states.
export function getAllStates(): IState[] {
	return stateList;
}

// Get a list of states belonging to a specific country.
export function getStatesOfCountry(countrycode: string): IState[] {
	if (!countrycode) return [];
	const states = stateList.filter((value) => {
		return value.countrycode === countrycode;
	});
	return states.sort(compare);
}

// Find a country by it's ISO code and the country in which it is contained.
export function getStateByCodeAndCountry(statecode: string, countrycode: string): IState | undefined {
	if (!statecode) return undefined;
	if (!countrycode) return undefined;

	return findStateByCodeAndCountryCode(stateList, statecode, countrycode);
}

// to be deprecate
export function getStateByCode(code: string): IState | undefined {
	// eslint-disable-next-line no-console
	console.warn(
		`WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!`,
	);
	if (!code) return undefined;

	return findEntryByCode(stateList, code);
}

export default {
	getAllStates,
	getStatesOfCountry,
	getStateByCodeAndCountry,
	getStateByCode,
};
