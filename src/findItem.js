//Поиск элементов в базе
const findItemsByKeynameValues = (data, keyname, values) => {
    let result = [];

    result = data.filter( object => {
        return values.includes(object[keyname])
    });
    
    return result.length === 0 ? null : result;
};