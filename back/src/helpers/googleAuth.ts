import { google } from 'googleapis';

const { GOOGLE_APIS_CLIENT_ID, GOOGLE_APIS_CLIENT_SECRET, GOOGLE_APIS_REDIRECT_URL } = process.env;

/*
 * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET
 * from the client_secret.json file. To get these credentials for your application, visit
 * https://console.cloud.google.com/apis/credentials.
 */
export const oauth2Client = new google.auth.OAuth2(GOOGLE_APIS_CLIENT_ID, GOOGLE_APIS_CLIENT_SECRET, GOOGLE_APIS_REDIRECT_URL);

const scopes = ['email', 'profile'];

export const authorizationUrl = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  scope: scopes,
  // Enable incremental authorization. Recommended as a best practice.
  include_granted_scopes: true,
});
