export interface Name {
    id: Number,
    name: String,
    gender: Gender,
    religion: Religion
    length: Lenght
}
export interface optionsTypes {
    gender: String,
    religion: String,
    length: String
}

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Both = 'Both'
}

export enum Religion {
    Muslim = 'Muslim',
    NonMuslim = 'NonMuslim',
    Both = 'Both'
}

export enum Lenght {
    Long = 'Long',
    Short = 'Short',
    Both = 'Both'
}