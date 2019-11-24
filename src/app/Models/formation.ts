export class Formation {
    constructor(
        private _titre?: String,
        private _description?: String, 
        private _volume_horaire?: number ,
        private _prix?: String ,
        private _idformateur?: String,
        private _img?: String

        ){}

    public get titre(): String {
        return this._titre;
    }
    public set titre(titre: String) {
        this._titre = titre;
    }
    public get img(): String {
        return this._img;
    }
    public set img(img: String) {
        this._img = img;
    }
    public get idformateur(): String {
        return this._idformateur;
    }
    public set idformateur(idformateur: String) {
        this._idformateur = idformateur;
    }

    public get prix(): String {
        return this._prix;
    }
    public set prix(prix: String) {
        this._prix = prix;
    }
    public get volume_horaire(): number {
        return this._volume_horaire;
    }
    public set volume_horaire(volume_horaire: number) {
        this._volume_horaire = volume_horaire;
    }
    public get description(): String {
        return this._description;
    }
    public set description(description: String) {
        this._description = description;
    }
   
}
