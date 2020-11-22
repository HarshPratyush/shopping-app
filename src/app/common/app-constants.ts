import { environment } from 'src/environments/environment';

export class AppConstants {
    public static BASE_URL ="http://localhost:8080/api/service/";
    public static REDIRECT_URI = `${environment.baseUrl}ouath2/redirect`
    public static OAUTH_LOGIN_URL = `${AppConstants.BASE_URL}oauth2/authorize/google?redirect_uri=${AppConstants.REDIRECT_URI}`
    public static TOKEN_CONSTANT = 'access-token';
    public static ACCESS_TOKEN = 'access-token';
    public static ERROR='error'

}