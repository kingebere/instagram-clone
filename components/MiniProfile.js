import {signOut,signIn,useSession} from "next-auth/react";

function MiniProfile() {
    const {data:session} = useSession();
    console.log(session)
    
    return (
        <div className="flex items-center justify-between mt-0 ml-0 md:ml-10 md:mt-14">
            <img className="rounded-full cursor-pointer border p-[2px] w-16 h-16" src={session.user.image} alt=""/>
        <div> 
     <h2 className="font-bold">{session.user.name}</h2>
     <h3 className="text-sm text-gray-400">welcome to instagram</h3>
        </div>
        <button onClick={signOut} className="text-blue-400 text-sm font-semibold">sign out</button>
        </div>
    )
}

export default MiniProfile

