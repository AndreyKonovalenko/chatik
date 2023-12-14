import uiConstants from "./ui-constants";
const { BASE_URL } = uiConstants;

    enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type TOptionsRequest = {
    data?: unknown;
    method?: METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.DELETE;
    timeout?: number;
    headers?: Record<string, string>;
    params?: object;
}


function queryStringify(data: object) {
    let result = '?';
    result = result + Object.entries(data).map(([key, value]) => {
        return `${key}=${Array.isArray(value) ? value.join(',') : String(value)}`
    }).join("&")
    return result;
}

class HTTPTransport {
    private apiUrl: string = ''
    constructor(apiPath: string) {
        this.apiUrl = `${BASE_URL}${apiPath}`
    }

    get(url:string, options: TOptionsRequest = {}): Promise<XMLHttpRequest> {
        return this.request(`${this.apiUrl}${url}`, {
            ...options,
            data: queryStringify(options.params || {}) || '',
            method: METHODS.GET
        }, options.timeout);
    }

    put(url: string, options:TOptionsRequest = {}): Promise<XMLHttpRequest> {
        return this.request(`${this.apiUrl}${url}`, {...options, method: METHODS.PUT}, options.timeout);
    }

    post(url: string, options: TOptionsRequest = {}): Promise<XMLHttpRequest> {
        return this.request(`${this.apiUrl}${url}`, {...options, method: METHODS.POST}, options.timeout);
    }

    delete(url: string, options: TOptionsRequest = {}): Promise<XMLHttpRequest>{
        return this.request(`${this.apiUrl}${url}`, {...options, method: METHODS.DELETE}, options.timeout);
    }

    request(url: string, options: TOptionsRequest = {method: METHODS.GET}, timeout = 5000): Promise<XMLHttpRequest> {
        const {method, headers, data} = options;

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.timeout = timeout;
            const isGet = method === METHODS.GET;
            xhr.open(method || METHODS.GET, isGet ? `${url}${data}` : url,);
            xhr.withCredentials = true;

            if (headers) {
                Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
            }
            xhr.onload = function() {
                resolve(xhr);
            };

            // const handleError = err => {
            //             reject(err);
            // };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}

export default HTTPTransport;
