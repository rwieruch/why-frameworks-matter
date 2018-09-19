import { environment } from '../environments/environment';

export const Config = {
    BASE_URL: environment.BASE_URL,
    toApiUrl(path) {
        return `${this.BASE_URL}/${path}`;
    }
};
