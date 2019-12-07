export class Formalabeur {
    static pwd: String;
    static img: String;

    constructor(
        private _nom?: String,
        private _prenom?: String,
        private _age?: number,
        private _tel?: String,
        private _email?: String,
        private _cin?: String,
        private _lienfb?: String,
        private _pwd?: String,
        private _img?: String) { }

    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    public get tel(): String {
        return this._tel;
    }
    public set tel(value: String) {
        this._tel = value;
    }

    public get lienfb(): String {
        return this._lienfb;
    }
    public set lienfb(value: String) {
        this._lienfb = value;
    }
    public get cin(): String {
        return this._cin;
    }
    public set cin(value: String) {
        this._cin = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get prenom(): String {
        return this._prenom;
    }
    public set prenom(value: String) {
        this._prenom = value;
    }
    public get nom(): String {
        return this._nom;
    }
    public set nom(value: String) {
        this._nom = value;
    }

    public get pwd(): String {
        return this._pwd;
    }
    public set pwd(value: String) {
        this._pwd = value;
    }
    public get img(): String {
        return this._img;
    }
    public set img(value: String) {
        this._img = value;
    }


}
