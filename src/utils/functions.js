export function pick(prop1, prop2, obj) {
    if (obj[prop1]) {
      return obj[prop1][prop2];
    }
    return;
}