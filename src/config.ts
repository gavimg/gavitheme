export interface Config {
    user?: any;
    apiEndPoint?: string;
    userData?: any;
}

export const config: Config = {
    'user': {
        'userId': '1234',
        'Name': 'name'
    },
    'apiEndPoint': 'http://localhost:3001/devices'
};