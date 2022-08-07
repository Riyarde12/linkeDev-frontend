
export function storeToStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

export function loadFromStorage(key, defaultValue = []) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}
