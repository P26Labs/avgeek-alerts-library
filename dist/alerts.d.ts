export * from './interfaces/flight';
export * from './interfaces/auth';
declare class AvgeekAlerts {
    private axios_client;
    constructor(token: string, environment?: string);
    getHello(): Promise<{
        status: number;
        message: any;
    }>;
}
export default AvgeekAlerts;
