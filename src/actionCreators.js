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
