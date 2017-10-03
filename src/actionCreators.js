const basePath= 'https://spz-api.herokuapp.com';

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
