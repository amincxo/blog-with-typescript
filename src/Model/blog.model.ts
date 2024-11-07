import { EditBlog, iBlog, IDatabase, NewBlog } from "../types/types"

export default new class Database {
    private state: IDatabase = {
        blog : [
            {id: 1 , title : "salam" , text: "man type script yad migiram"}
        ]
    }
    public async NewBlog(data: NewBlog ): Promise<string>{
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
    public async GetBlogByID(id: iBlog['id']): Promise<iBlog | undefined>{
        return this.state.blog.find(blog => blog.id == id)
    }
    public async RemoveBlogByID(id: iBlog['id']): Promise<string>{
        if(!this.GetBlogByID(id))return "notfund blog"
        this.state.blog.forEach((blog , index) =>{
            if(blog.id == id ){
                this.state.blog.splice(index , 1)
            }
        });
        return "remove Blog succsessfully"
    }
    public async EditBlog (id : iBlog['id'], newData:EditBlog) : Promise<string>{
        if (!this.GetBlogByID(id)) return "not found blog";
        this.state.blog.forEach((blog,index)=> {
            this.state.blog[index] = Object.assign(blog , newData)
        })
        return 'update blog successfuly'
    }
}