function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

const randomizeErrorPromise = (reject) => {
    const random = getRandomInt(100);
    
    if (random > 90) {
        reject('Bad Request');
    }
    
    return null;
};