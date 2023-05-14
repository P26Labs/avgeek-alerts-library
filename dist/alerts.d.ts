declare class AvgeekAlerts {
    private axios_client;
    constructor(token: string, environment?: string);
    getHello(): Promise<{
        status: number;
        message: any;
    }>;
}
export default AvgeekAlerts;
