/* eslint-disable no-shadow */
import { Country, State } from '../index';
import { ICountry, IState } from '../interface';

const executeAllTests = function (Country: any, State: any) {
	test('Check for Country By Code ', () => {
		const code = 'CA';
		const country: ICountry = Country.getCountryByCode(code);
		expect(country).toEqual({
			name: 'Canada',
			code: 'CA',
			flag: '🇨🇦',
			phonecode: '+1',
		});
	});

	test('Check for Country By undefined Code ', () => {
		let code;
		const country: ICountry = Country.getCountryByCode();
		expect(country).toEqual(code);
	});

	test('Check for Canada States', () => {
		const code = 'CA';
		const country: any = Country.getCountryByCode(code);
		const states = State.getStatesOfCountry(country.code);
		const names = states.map((state: IState) => {
			return state.name;
		});
		expect(names).toEqual([
			'Alberta',
			'British Columbia',
			'Manitoba',
			'New Brunswick',
			'Newfoundland and Labrador',
			'Northwest Territories',
			'Nova Scotia',
			'Nunavut',
			'Ontario',
			'Prince Edward Island',
			'Quebec',
			'Saskatchewan',
			'Yukon',
		]);
	});

	test('Check All States for United States Of America', () => {
		const code = 'US';
		const country: any = Country.getCountryByCode(code);
		const states = State.getStatesOfCountry(country.code);
		const names = states.map((state: IState) => {
			return state.name;
		});
		expect(names).toEqual([
			'Alabama',
			'Alaska',
			'American Samoa',
			'Arizona',
			'Arkansas',
			'Baker Island',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'District of Columbia',
			'Florida',
			'Georgia',
			'Guam',
			'Hawaii',
			'Howland Island',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Jarvis Island',
			'Johnston Atoll',
			'Kansas',
			'Kentucky',
			'Kingman Reef',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Midway Atoll',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Navassa Island',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Northern Mariana Islands',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Palmyra Atoll',
			'Pennsylvania',
			'Puerto Rico',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'United States Minor Outlying Islands',
			'United States Virgin Islands',
			'Utah',
			'Vermont',
			'Virginia',
			'Wake Island',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming',
		]);
	});

	test('Check States for India', () => {
		const code = 'IN';
		const country: any = Country.getCountryByCode(code);
		const states = State.getStatesOfCountry(country.code);
		const names = states.map((state: IState) => {
			return state.name;
		});

		expect(names).toEqual([
			'Andaman and Nicobar Islands',
			'Andhra Pradesh',
			'Arunachal Pradesh',
			'Assam',
			'Bihar',
			'Chandigarh',
			'Chhattisgarh',
			'Dadra and Nagar Haveli and Daman and Diu',
			'Delhi',
			'Goa',
			'Gujarat',
			'Haryana',
			'Himachal Pradesh',
			'Jammu and Kashmir',
			'Jharkhand',
			'Karnataka',
			'Kerala',
			'Ladakh',
			'Lakshadweep',
			'Madhya Pradesh',
			'Maharashtra',
			'Manipur',
			'Meghalaya',
			'Mizoram',
			'Nagaland',
			'Odisha',
			'Puducherry',
			'Punjab',
			'Rajasthan',
			'Sikkim',
			'Tamil Nadu',
			'Telangana',
			'Tripura',
			'Uttar Pradesh',
			'Uttarakhand',
			'West Bengal',
		]);
	});

	test('Check States for undefined code', () => {
		let code;
		const states = State.getStatesOfCountry(code);
		expect(states.length).toEqual(0);
	});

	test('Get State by State Code and Country Code', () => {
		const countryCode = 'PK';
		const stateCode = 'KP';
		const state: any = State.getStateByCodeAndCountry(stateCode, countryCode);
		expect(state.name).toEqual('Khyber Pakhtunkhwa');
	});

	test('Get State by State Code undefined and Country Code', () => {
		const countryCode = 'PK';
		let stateCode;
		const state: any = State.getStateByCodeAndCountry(stateCode, countryCode);
		expect(state).toEqual(undefined);
	});

	test('Get State by State and Country Code undefined', () => {
		let countryCode;
		const stateCode = 'KP';
		const state: any = State.getStateByCodeAndCountry(stateCode, countryCode);
		expect(state).toEqual(undefined);
	});
};
export default executeAllTests;
executeAllTests(Country, State);
