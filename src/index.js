const getUsersPromise = () => {
    return new Promise( (resolve, reject) => {
        const USERS = [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Andy'},
            {id: 3, name: 'John'},
        ];
  
        setTimeout(() => {
            randomizeErrorPromise(reject);
            resolve(USERS);
        }, 2000);
    })
};
const getProductsPromise = () => {
    return new Promise( (resolve, reject) => {
        const PRODUCTS = [
            {id: 1, name: 'iPad'},
            {id: 2, name: 'Google Pixel'},
            {id: 3, name: 'War and Peace'},
            {id: 4, name: 'iPad'},
            {id: 5, name: 'Kaizen'},
            {id: 6, name: 'Sherlock Holmes'},
        ];
  
        setTimeout(() => {
            randomizeErrorPromise(reject);
            resolve(PRODUCTS);
        }, 2000);
    })
};

const getOrdersPromise = () => {
    return new Promise( (resolve, reject) => {
        const ORDERS = [
            {id: 1, userId: 1, checkout: [1, 6]},
            {id: 2, userId: 1, checkout: [3]},
            {id: 3, userId: 2, checkout: [2, 4]},
        ];
  
        setTimeout(() => {
            randomizeErrorPromise(reject);
            resolve(ORDERS);
        }, 2000);
    });
};

async function getCheckoutsForUserAsync(userID) {
    try {
        const Users = await getUsersPromise();
        const Products = await getProductsPromise();
        const Orders = await getOrdersPromise();

        const User = findItemsByKeynameValues(Users, 'id', [userID]);
        if (User === null) {
            throw new Error('User is not found');
        }

        const Order = findItemsByKeynameValues(Orders, 'userId', [userID]);
        if (Order === null) {
            throw new Error('User has not added any orders yet');
        }

        for (const element of Order) {
            element.checkout = findItemsByKeynameValues(Products, 'id', element.checkout);
        }

        console.log({
            username: User[0].name,
            order: Order,
        });

    } catch(error) {
        console.error(error);
    }
}

getCheckoutsForUserAsync(1);    
    




