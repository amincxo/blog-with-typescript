import { iBlog, IDatabase, NewBlog } from "../types/types"

export default new class Database {
    private state: IDatabase = {
        blog : [
            {id: 1 , title : "salam" , text: "man type script yad migiram"}
        ]
    }
    public async NewData(data: NewBlog ): Promise<string>{
        this.state.blog.push({
            id: this.state.blog.length + 1,
            title: data.text,
            text: data.text
        })
        return "new blog Created"
    }
    public async GetAllBlog(): Promise<iBlog[]>{
        return this.state.blog
    }
}