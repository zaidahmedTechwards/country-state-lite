export const findEntryByCode = (source: any, code: string) => {
	if (code && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.code === code;
		});
		return codex !== -1 ? source[codex] : undefined;
	}
	return undefined;
};

export const findStateByCodeAndCountryCode = (source: any, code: string, countrycode: string) => {
	if (code && countrycode && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.code === code && c.countrycode === countrycode;
		});
		return codex !== -1 ? source[codex] : undefined;
	}
	return undefined;
};

export const compare = (a: any, b: any) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
};
