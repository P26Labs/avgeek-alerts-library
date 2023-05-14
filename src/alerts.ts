// avgeek_alerts_library/src/alerts.ts

export * from './interfaces/flight';
export * from './interfaces/auth';

import axios, { AxiosInstance } from 'axios';

class AvgeekAlerts {
    private axios_client: AxiosInstance;

    constructor(token: string, environment: string = 'production') {
        this.axios_client = axios.create({
            baseURL: environment === 'production' ? 'https://alerts.avgeek.io/api' : 'http://localhost:3001/api',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async getHello() {
        const response = await this.axios_client.get('/hello');
        return {
            status: response.status,
            message: response.data.message,
        };
    }
}

export default AvgeekAlerts;
