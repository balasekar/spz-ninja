const basePath = 'https://spz-api.herokuapp.com';

export function fetchProducts() {
    return {
        type: 'PRODUCTS',
        fetchConfig: {
            method: 'GET',
            path: '/api/product',
            basePath: basePath
        }
    };
}

export function fetchClients() {
    return {
        type: 'CLIENTS',
        fetchConfig: {
            method: 'GET',
            path: '/api/client',
            basePath: basePath
        }
    };
}

export function fetchSolutions() {
    return {
        type: 'SOLUTIONS',
        fetchConfig: {
            method: 'GET',
            path: '/api/solution',
            basePath: basePath
        }
    };
}

export function askUserDetails(solutionName) {
    return {
        type: 'ASK_USER_DETAILS',
        data: solutionName
    };
}

export function saveUserDetails(userdetails, solutionName) {
    let userData = userdetails;
    userData.need_solution = solutionName;
    return {
        type: 'SAVE_USER_DETAILS',
        data: userData
    };
}

export function closeUserDetails() {
    return {
        type: 'CLOSE_USER_DETAILS'
    };
}