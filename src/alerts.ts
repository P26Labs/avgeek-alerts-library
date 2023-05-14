// avgeek_alerts_library/src/alerts.ts

export * from './interfaces/flight';
export * from './interfaces/auth';

import axios, { AxiosInstance } from 'axios';
import { EmailAuthSignIn } from './alerts';

class AvgeekAlerts {
    private axios_client: AxiosInstance;

    constructor(jwt_token: string, environment: 'production' | 'staging' = 'production') {
        this.axios_client = axios.create({
            baseURL: environment === 'production' ? 'https://alerts.avgeek.io/api' : 'http://localhost:3001/api',
            headers: {
                Authorization: `Bearer ${jwt_token}`,
            },
        });
    }

    private handleError(error: any) {
        let response = error.response;
        let result = response?.data || response?.statusText || response || error;
        let status = response?.status || error.status || 500;
    
        return {
            success: false,
            result: result,
            status: status,
        };
    }

    async emailAuthSignIn({
        email_body,
        email_recipients,
    }: {
        email_body: EmailAuthSignIn,
        email_recipients: string[] | string,
    }) {
        try {
            const response = await this.axios_client.post('/email/auth-sign-in', {
                email_body,
                email_recipients,
            });
            return {
                success: true,
                result: response.data,
                status: response.status,
            };
        } catch (error: any) {
            return this.handleError(error);
        }
    }
}

export default AvgeekAlerts;
