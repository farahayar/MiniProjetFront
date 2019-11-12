export class Formateur {
    constructor(
        private _nom?: string,
        private _prenom?: string,
        private _age?:number,
        private _fonction?: string,
        private _numero_tel?: string,
        private _email?: string,
        private _salaire?: string,
        private _admin?: String,
        private _pwd?: string,
        private _image_formateur?: string,
    ) { }






    get nom() { return this._nom; }
    set nom(nom: string) { this._nom = nom; }

    get prenom() { return this._prenom; }
    set prenom(prenom: string) { this._prenom = prenom; }


    get fonction() { return this._fonction; }
    set fonction(fonction: string) { this._fonction = fonction; }


    get email() { return this._email; }
    set email(email: string) { this._email = email; }


    get numero_tel() { return this._numero_tel; }
    set numero_tel(numero_tel: string) { this._numero_tel = numero_tel; }

    get salaire() { return this._salaire; }
    set salaire(salaire: string) { this._salaire = salaire; }

    get admin() { return this._admin; }
    set admin(admin: String) { this._admin = admin; }

    get image_formateur() { return this._image_formateur; }
    set image_formateur(image_formateur: string) { this._image_formateur = image_formateur; }

    get pwd() { return this._pwd; }
    set pwd(pwd: string) { this._pwd = pwd; }
    
    get age() { return this._age; }
    set age(age: number) { this._age = age; }




}