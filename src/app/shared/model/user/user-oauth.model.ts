import { API } from '../../util/api.util';

export class UserOauthModel {

    grant_type: string;
    username: string;
    password: string;
    client_id: string;
    access_token: string;
    logado: boolean;

    constructor(username: string, password: string) {
        this.grant_type = 'password';
        this.client_id = API.ID_APP;
        this.username = username;
        this.password = password;
    }

}
