// export const pick = function (obj, props) {
//     if (!obj || !props) return;
//     let picked = {};
    
// 	props.forEach(function(prop) {
// 		picked[prop] = obj[prop];
//     });
    
// 	return picked;
// };

export const pick = (propertyArr, obj) => {
    return propertyArr.reduce((acc, elem) =>
      (acc && acc[elem]) ? acc[elem] : null, obj);
}