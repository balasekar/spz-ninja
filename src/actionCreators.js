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

export function saveUserDetails(userdetails, requestedResource) {
    let userData = userdetails;
    userData.requested_item = requestedResource;
    return {
        type: 'SAVE_REQUEST_DETAILS',
        fetchConfig: {
            method: 'POST',
            path: '/api/request',
            body: JSON.stringify(userData),
            basePath: basePath
        }
    };
}

export function closeUserDetails() {
    return {
        type: 'CLOSE_USER_DETAILS'
    };
}