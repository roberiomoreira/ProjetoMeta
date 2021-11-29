export class UserModel{
    profile: any;
    constructor(
        public id: string,
        public username: string,
        public senha: string,
        public authorities: string
    ){}
}
