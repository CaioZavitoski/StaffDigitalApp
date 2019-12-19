export class UserModel {
    username: string = undefined;
    password: string = undefined;
}

export class SignupModel {
    nomeCompleto: string = undefined;
    password: string = undefined;
    confirmPassword: string = undefined;
}

export class LoginModel extends UserModel {

}
