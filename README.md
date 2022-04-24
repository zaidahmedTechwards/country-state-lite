# country-state-lite-v1

Light Weight library for Country and State

# Install

`npm i country-state-lite-v1`

# Docs

## getCountryByCode(countryCode)

It accepts a valid `CountryCode` eg: `'US'` and returns _Country Details_

type: **json | ICountry**

```js
{
	name: "United States",
	code: "US",
	flag: "🇺🇸",
	phonecode: "+1"
}
```

## getStateByCodeAndCountry(stateCode, countryCode)

It accepts a valid `StateCode` eg: `'CA'` `CountryCode` eg: `'US'` and returns _State Details_

type: **json | ICountry**

```js
{
	name: "California",
	code: "CA",
	countrycode: "US",
}
```

## getStatesOfCountry(countryCode)

It accepts a valid `CountryCode` and returns _all States_ as Array of JSON

type: **array of json | IState**

```js
[
	{
		name: 'Arizona',
		code: 'AZ',
		countrycode: 'US',
	},
];
```

## getAllCountries

It returns **all Countries**

type: **array of json | ICountry**

```js
[
	{
		name: 'United States',
		code: 'US',
		flag: '🇺🇸',
		phonecode: '+1',
	},
];
```

## getAllStates

It returns **all States**

type: **array of json | IState**

```js
[
	{
		name: 'Arizona',
		code: 'AZ',
		countrycode: 'US',
	},
];
```
