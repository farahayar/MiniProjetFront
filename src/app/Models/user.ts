export class User {
    constructor(
        private _email?: string,
        private _nom?: string,
        private _prenom?: string,
        private _age?:number,
        private _numero_tel?: string,
        private _cin?:number,
        private _lien_fb?: string,
        private _formalabeur?: string,
    ) { }

    get email() { return this._email; }
    set email(email: string) { this._email = email; }

    get nom() { return this._nom; }
    set nom(nom: string) { this._nom = nom; }

    get prenom() { return this._prenom; }
    set prenom(prenom: string) { this._prenom = prenom; }


    get age() { return this._age; }
    set age(age: number) { this._age = age; }


    get numero_tel() { return this._numero_tel; }
    set numero_tel(numero_tel: string) { this._numero_tel = numero_tel; }

    get cin() { return this._cin; }
    set cin(cin: number) { this._cin = cin; }

    get lien_fb() { return this._lien_fb; }
    set lien_fb(lien_fb: string) { this._lien_fb = lien_fb; }

    get formalabeur() { return this._formalabeur; }
    set formalabeur(formalabeur: string) { this._formalabeur = formalabeur; }

    
}
