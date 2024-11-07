import blogService from "./services/blog.service";


(async() => {
   console.log( await blogService.Create ({
        title: "android how to workasdfasdfdfdf",
        text: "android how to worksadf"
    }))
    console.log(await blogService.Create ({
        title: "android how to workaaaaaasdfas",
        text: "android how to workfasdfasdf"
    }))
   console.log( await blogService.Create ({
        title: "android how to workasdf",
        text: "android how to workffffffffff"
    }))
    
    console.log(await blogService.FetchBlogs());
    console.log(await blogService.FetchBlogByID(3))
    console.log(await blogService.DeleteBlogByID(4))
    console.log(await blogService.DeleteBlogByID(4))
    console.log(await blogService.EditBlog(3 , {
        title:"asdfasdfasdfasdfasd",
        text:"aseeeeeeedededededededed"
    }))
})