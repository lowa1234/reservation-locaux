export interface Etudiant {
    nom: string;
    prenom: string;
    da: string;
    amis?: {
        nom: string;
        prenom: string;
        da: string;
    }[];
}
