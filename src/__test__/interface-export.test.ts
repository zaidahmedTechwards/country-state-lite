// importing interfaces from main index.ts file
import { ICountry } from '../interface';

// writing tests for Interfaces
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

function isValidCountryObjectStructure(object: any): object is ICountry {
	return 'name' in object && 'code' in object && 'flag' in object && 'phonecode' in object;
}

test('Check for Interface export when Type Structure is Same', () => {
	const country = {
		name: 'India',
		code: 'IN',
		flag: '🇮🇳',
		phonecode: '+91',
	};
	const isCountry = isValidCountryObjectStructure(country);
	expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Not Same', () => {
	const country = {
		flag: '🇮🇳',
		code: 'IN',
		phonecode: '+91', // missing name field
	};
	const isCountry = isValidCountryObjectStructure(country);
	expect(isCountry).toEqual(false);
});

function isValidCountryObjectAndValueType(object: any): object is ICountry {
	return (
		typeof typeof object.name === 'string' &&
		typeof object.code === 'string' &&
		typeof object.flag === 'string' &&
		typeof object.phonecode === 'string'
	);
}

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
	const country: ICountry = {
		name: 'India',
		code: 'IN',
		flag: '🇮🇳',
		phonecode: '+91',
	};
	const isCountry = isValidCountryObjectAndValueType(country);
	expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
	const country = {
		name: 'India',
		code: 'IN',
		flag: '🇮🇳',
		phonecode: 91, // wrong type
	};
	const isCountry = isValidCountryObjectAndValueType(country);
	expect(isCountry).toEqual(false);
});
