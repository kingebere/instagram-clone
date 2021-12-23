import faker from "faker";
import {useEffect,useState} from "react"
import Story from "./Story"
import {signOut,signIn,useSession} from "next-auth/react";
export default function Stories() {
  const {data:session} = useSession();


        const suggestionns=[
          {
            id:1,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Ben white',
          },
           {
            id:2,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',

          },
           {
            id:399,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
          {
            id:18,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
           {
            id:28,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',

          },
           {
            id:37,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
          {
            id:19789788,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
           {
            id:77772,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',

          },
           {
            id:6663,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
          {
            id:19785,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
           {
            id:209898,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',

          },
           {
            id:399765,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
          {
            id:17867677,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
           {
            id:267765,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',

          },
           {
            id:3675,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Benwhite',
          },
        ]
    
    return (
   
    
        
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
       {session && (
         <Story img={session.user.image} username={session.user.username}/>
       )}
       
        {suggestionns.map((profile)=>(
            <Story key={profile.id}
              img={profile.avatar}
               username={profile.username}
             />
        ))}

            
        </div>
    )
}

