// avgeek_alerts_library/src/alerts.ts

export * from './interfaces/flight';
export * from './interfaces/auth';

import axios, { AxiosInstance } from 'axios';
import { EmailAuthSignIn } from './alerts';
import { EmailAuthEmailUpdate } from './alerts';
import { EmailAuthResetPassword } from './alerts';
import { EmailAuthSignUp } from './alerts';
import { EmailFlightAdd } from './alerts';
import { EmailFlightArrivalDelay } from './alerts';
import { EmailFlightCancel } from './alerts';
import { EmailFlightCheckIn } from './alerts';
import { EmailFlightLand } from './alerts';
import { EmailFlightRemove } from './alerts';
import { EmailFlightStatus } from './alerts';
import { EmailFlightAutoCheckInRequest } from './alerts';
import { EmailFlightAutoCheckInInitiate } from './alerts';

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

        console.log("Avgeek Alerts API Error", error)
    
        return {
            success: false,
            result: result,
            status: status,
        };
    }

    private async sendEmail<T>({
        endpoint,
        email_body,
        email_recipients,
    }: {
        endpoint: string,
        email_body: T,
        email_recipients: string[] | string,
    }) {
        try {
            const response = await this.axios_client.post(endpoint, {
                email_body,
                email_recipients,
            });

            console.log("Avgeek Alerts API Response", response.status, response.data)

            return {
                success: true,
                result: response.data,
                status: response.status,
            };
        } catch (error: any) {
            return this.handleError(error);
        }
    }

    emailAuthEmailUpdate = (data: { email_body: EmailAuthEmailUpdate, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/auth-email-update', ...data });
    emailAuthResetPassword = (data: { email_body: EmailAuthResetPassword, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/auth-reset-password', ...data });
    emailAuthSignIn = (data: { email_body: EmailAuthSignIn, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/auth-sign-in', ...data });
    emailAuthSignUp = (data: { email_body: EmailAuthSignUp, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/auth-sign-up', ...data });
    emailFlightAdd = (data: { email_body: EmailFlightAdd, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-add', ...data });
    emailFlightArrivalDelay = (data: { email_body: EmailFlightArrivalDelay, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-arrival-delay', ...data });
    emailFlightCancel = (data: { email_body: EmailFlightCancel, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-cancel', ...data });
    emailFlightCheckIn = (data: { email_body: EmailFlightCheckIn, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-check-in', ...data });
    emailFlightAutoCheckInRequest = (data: { email_body: EmailFlightAutoCheckInRequest, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-auto-check-in-request', ...data });
    emailFlightAutoCheckInInitiate = (data: { email_body: EmailFlightAutoCheckInInitiate, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-auto-check-in-initiate', ...data });
    emailFlightLand = (data: { email_body: EmailFlightLand, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-land', ...data });
    emailFlightRemove = (data: { email_body: EmailFlightRemove, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-remove', ...data });
    emailFlightStatus = (data: { email_body: EmailFlightStatus, email_recipients: string[] | string }) => this.sendEmail({ endpoint: '/email/flight-status', ...data });
}

export default AvgeekAlerts;
