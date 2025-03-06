export const EditProfile = () => {
    return ( 
    <div className="flex flex-col flex-wrap w-full h-150 px-10 items-center">
        <h1 className="flex justify-center text-3xl p-5">Profile</h1>
            <div key={profile.id} className="lg:bg-gray-900 flex flex-col flex-wrap w-3/4 h-90 px-10 justify-center">
                <header className="flex justify-between pb-25">
                    <section className="flex pt-3 pl-10">
                        <h2 className="text-gray-200 p-1">Author: </h2>
                        <h2 className="text-gray-200 p-1"> {profile?.user.fullName}</h2>                        
                    </section>
                    <section className="flex pt-3 pr-10">
                        <h3 className="text-gray-200 p-1">Cohort:</h3>                    
                        <h3 className="text-gray-200 p-1"> {profile?.user.cohort}</h3>                         
                    </section>
                </header>
                <section className="lg:bg-gray-500 w-2/12 rounded-lg p-4">
                    <p className="text-gray-200 ">Number of Posts:  </p>
                    <p className="text-gray-200 pl-4">{profile?.userPosts?.length}</p>
                </section>

            </div>
    </div>
    )
}