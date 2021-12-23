import {useState,useEffect} from 'react';

function Suggestions() {
   
     const suggestionns=[
          {
            id:1,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Chris davis',
               "company": {
            "name": "Gottlieb Group",
            "catchPhrase": "Intuitive dedicated open architecture",
            "bs": "aggregate clicks-and-mortar solutions"
        },
          },
           {
            id:2,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Ben davies',
               "company": {
            "name": "Meta Group",
            "catchPhrase": "Intuitive dedicated open architecture",
            "bs": "aggregate clicks-and-mortar solutions"
        },

          },
           {
            id:399,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Jeff Bee',
               "company": {
            "name": "Amazon Group",
            "catchPhrase": "Intuitive dedicated open architecture",
            "bs": "aggregate clicks-and-mortar solutions"
        },
          },
           {
            id:3996,
              "avatar":'https://firebasestorage.googleapis.com/v0/b/instagram-85f0e.appspot.com/o/posts%2FLhQBntcvV79IiDbzDmr3%2Fimage?alt=media&token=fff149a4-a623-4ff0-9272-79b53d698e67',
              "username":'Chris smalling',
               "company": {
            "name": "Netflix Group",
            "catchPhrase": "Intuitive dedicated open architecture",
            "bs": "aggregate clicks-and-mortar solutions"
        },
          },
  
        ]
    return (
        <div className="mt-4 ml-10 dark:text-gray-100">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="text-sm font-bold">Suggestions for you</h3>
        <button className="px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
          See All
        </button>
      </div>
       {
           suggestionns.map((profile)=>(
             <div key={profile.id} className="flex items-center justify-between mt-3"> 
             <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar} alt=""/>
             <div className="flex-1 ml-4">
<h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400"> works at {profile.company.name} </h3>
             </div>
             <button className="text-blue-400">Follow</button>
             </div>  
           )) }
        </div>
    )
}

export default Suggestions
