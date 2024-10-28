export interface iBlog {
    id: number;
    title:string;
    text: string;
}

export interface IDatabase {
    blog: iBlog[]
}