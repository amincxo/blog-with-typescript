import blogModel from "../Model/blog.model"
import { EditBlog, iBlog, NewBlog } from "../types/types";

export default new class blogService {
    private db = blogModel;
    public async Create(data: NewBlog): Promise<string>{
        return this.db.NewBlog(data)
    }
    public async FetchBlogs(): Promise<iBlog[]>{
        return this.db.GetAllBlog()
    }
    public async FetchBlogByID(id: iBlog['id']): Promise<iBlog | undefined>{
        return this.db.GetBlogByID(id)
    }
    public async DeleteBlogByID(id: iBlog["id"]): Promise<string>{
        return this.db.RemoveBlogByID(id)
    }
    public async EditBlog(id : iBlog['id'] , newData: EditBlog): Promise<string>{
        return this.db.EditBlog(id , newData)
    }
}