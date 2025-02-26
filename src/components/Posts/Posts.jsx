
export const Posts = ({posts}) => {
    return(
     <section className="flex w-86 m-8 lg:bg-gray-500 rounded-lg justify-center">
        <div className="">
               <button><h2  className="flex w-77 justify-center p-2">{posts.title}</h2></button>
               <p className="flex w-77 justify-center p-2">{posts.topic.name}</p> 
              <p className="flex w-77 items-center p-3">{posts.body}</p>  
              <section className="flex w-77 p-2"><button className="flex w-45">Heart placeHolder</button>
              <p className="flex w-77 p-2">Liked by: {posts.likes} users</p>  
              </section>  
              
        </div>
    </section>
    )
}