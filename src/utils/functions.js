export const pick = (propertyArr, obj) => {
    return propertyArr.reduce((acc, elem) =>
    	(acc && acc[elem]) ? acc[elem] : null, obj);
}

export const save = (sts) => {
	window.localStorage.setItem("state", JSON.stringify(sts));
}