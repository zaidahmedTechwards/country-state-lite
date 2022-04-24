export interface ICountry {
	name: string;
	code: string;
	flag: string;
	phonecode: string;
	getAllCountries?(): ICountry[];
	getCountryByCode?(): ICountry;
}

export interface IState {
	name: string;
	code: string;
	countrycode: string;
	getStatesOfCountry?(): IState[];
	getStateByCodeAndCountry?(): IState;
	getStateByCode?(): IState;
}

