export function fetchProducts() {
    return {
        type: 'PRODUCTS',
        fetchConfig: {
            method: 'GET',
            path: '/api/product',
            basePath: 'http://localhost:3001'
        }
    };
}

export function fetchClients() {
    return {
        type: 'CLIENTS',
        fetchConfig: {
            method: 'GET',
            path: '/api/client',
            basePath: 'http://localhost:3001'
        }
    };
}

export function fetchSolutions() {
    return {
        type: 'SOLUTIONS',
        fetchConfig: {
            method: 'GET',
            path: '/api/solution',
            basePath: 'http://localhost:3001'
        }
    };
}
