import Post from "./Post"
import {useState,useEffect} from "react"
import {db} from "../firebase"
import {collection,onSnapshot,query,orderBy} from "@firebase/firestore"
// const posts =[
//     {
//         id:"123",
//         username:"qwery",
//         img:"https://links.papareact.com/3ke",
//         userImg:"https://links.papareact.com/3ke",
    
//         caption:"Tbmhis is dope"
//     },
//     {
//         id:"1273",
//         username:"qwejhhry",
//         img:"https://links.papareact.com/3ke",
//         userImg:"https://links.papareact.com/3ke",
    
//         caption:"This is doknpe"
//     },
//     {
//         id:"1237",
//         username:"qwerygf",
//         img:"https://links.papareact.com/3ke",
//         userImg:"https://links.papareact.com/3ke",
    
//         caption:"This is dopke"
//     },
// ]
// ;
function Posts() {
  
      const [posts,setPosts] = useState([]);
      useEffect(() => 
           onSnapshot(
               query(collection(db,'posts'),orderBy("timestamp","desc")),
               (snapshot)=>{
              setPosts(snapshot.docs)
          })
     
      , 
      [db]
      );
console.log(posts)
    return (
  
        <div>
        {posts.map((post) => (
            <Post key={post.id} 
            id={post.id} 
            username={post.data().username} 
            userImg={post.data().profileImg} 
            img={post.data().image}
            caption={post.data().caption}
            />
        ))}
        {/*post*/}
   
         
        </div>
    );
}

export default Posts
