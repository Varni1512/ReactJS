import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className="flex justify-center items-center min-h-[60vh] p-6">
            <div className="max-w-md w-full bg-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-transform hover:scale-105 duration-300 border border-slate-700">
                
                {/* Header/Avatar Section */}
                <div className="flex flex-col items-center pt-10 pb-6 bg-slate-700/50">
                    <img 
                        className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg mb-4" 
                        src={data.avatar_url} 
                        alt={`${data.login} profile`} 
                    />
                    <h1 className="text-white text-2xl font-bold tracking-wide">{data.name || data.login}</h1>
                    <p className="text-orange-400 font-medium">@{data.login}</p>
                </div>

                {/* Info Section */}
                <div className="px-8 py-6">
                    <p className="text-gray-300 text-center italic mb-6">
                        {data.bio || "This developer prefers to keep their bio a mystery."}
                    </p>

                    <div className="grid grid-cols-3 gap-4 border-t border-slate-700 pt-6 text-center">
                        <div>
                            <p className="text-white font-bold text-xl">{data.followers}</p>
                            <p className="text-gray-400 text-xs uppercase tracking-widest">Followers</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-xl">{data.public_repos}</p>
                            <p className="text-gray-400 text-xs uppercase tracking-widest">Repos</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-xl">{data.following}</p>
                            <p className="text-gray-400 text-xs uppercase tracking-widest">Following</p>
                        </div>
                    </div>
                </div>

                {/* Footer Link */}
                <a 
                    href={data.html_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 transition-colors"
                >
                    Visit GitHub Profile
                </a>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    // It's good practice to wrap fetch in a try/catch or check response.ok
    const response = await fetch('https://api.github.com/users/varni1512')
    if (!response.ok) {
        throw new Error("Failed to fetch GitHub data")
    }
    return response.json()
}