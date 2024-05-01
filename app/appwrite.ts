import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65fe9b452c61919baf42'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
