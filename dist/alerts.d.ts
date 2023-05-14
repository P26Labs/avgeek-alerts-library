export * from './interfaces/flight';
export * from './interfaces/auth';
import { EmailAuthSignIn } from './alerts';
declare class AvgeekAlerts {
    private axios_client;
    constructor(token: string, environment?: string);
    handleError(error: any): {
        success: boolean;
        result: any;
        status: any;
    };
    emailAuthSignIn({ email_body, email_recipients, }: {
        email_body: EmailAuthSignIn;
        email_recipients: string[] | string;
    }): Promise<{
        success: boolean;
        result: any;
        status: any;
    }>;
}
export default AvgeekAlerts;
