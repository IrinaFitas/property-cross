export const pick = (propertyArr, obj) => {
    return propertyArr.reduce((acc, elem) =>
    	(acc && acc[elem]) ? acc[elem] : null, obj);
};

export const save = (sts) => {
	window.localStorage.setItem(sts.userId, JSON.stringify(sts));
};

export const requiredFieldMessage = (field) => {
	return `Input your ${field}, please.`;
};

export const checkEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};