export interface iBlog {
    id: number;
    title:string;
    text: string;
}

export interface IDatabase {
    blog: iBlog[]
}
export type NewBlog = Omit<iBlog, 'id' >
export type EditBlog = Partial<NewBlog>