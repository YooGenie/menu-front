import HttpStatusError from './HttpStatusError';

export class HttpUtil {

    static getHeader = () => {
        return {
            'Content-Type': 'application/json'
        };
    };

    static handleHttpStatus = (response) => {
        if (response.ok) {
            return response;
        } else {
            throw new HttpStatusError(response.statusMessage, response);
        }
    };

};
