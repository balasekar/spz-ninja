const fetchMiddleware = store => next => (action) => {
    if (!action || !action.fetchConfig) {
        return next(action);
    }

    const dispatch = store.dispatch;
    const config = action.fetchConfig;
    const type = action.type;
    const path = config.path || '/';
    const method = config.method || 'GET';
    const additionalHeaders = method === 'GET' ? {} : { 'Content-Type': 'application/json; charset=utf-8' };
    const headers = Object.assign(additionalHeaders, config.headers);
    const body = config.body;
    const successSuffix = config.successSuffix || '_SUCCESS';
    const failureSuffix = config.failureSuffix || '_FAILURE';
    const requestSuffix = config.requestSuffix || '_REQUEST';
    const basePath = config.basePath;

    let valid = false;
    dispatch({ type: `${type}${requestSuffix}`, data: typeof body === 'string' ? JSON.parse(body) : body });
    return fetch(`${basePath}${path}`, {
        method,
        headers,
        body
    })
        .then((res) => {
            if (res.ok === true) {
                valid = true;
            }
            return res.json();
        })
        .then((json) => {
            if (valid === false) {
                if (json.message) {
                    throw new Error(json.message);
                }
                throw new Error('Unexpected error.');
            }

            if (config.successCallback) {
                return config.successCallback(dispatch, json);
            }

            return dispatch({ type: `${type}${successSuffix}`, data: json });
        })
        .catch(error => dispatch({ type: `${type}${failureSuffix}`, error }));
};

export default fetchMiddleware;
