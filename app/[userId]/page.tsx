import getuser from "@/app/server/getuser"
import Link from "next/link";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, use } from "react";

    export default async function Page(props:any) {
    const getUserlist = getuser();
    const users:any = await getUserlist;
    const current = decodeURI(props.params.userId)
    // console.log(users);
    
    // const current = props.params.userId;
    // // const userData:any = users[current-1]
    // const cities:any=userData?.cities;
    // const city = cities.map((city:any,index:any) => (
        
        //    index === 0 ? city : city
        // )
        // )
        const userData:any = users.find((item: { state: any; }) => item.state === decodeURI(props.params.userId));
        const city:any = userData?.cities
     

    return(
//     <div className=" "  >k
//   {  userData === current ? (
//       <>
//         <div className="py-16 w-full px-auto flex flex-wrap justify-center gap-2 md:gap-4  lg:gap-2  h-18 rounded-xl shadow-2xl">
          
//           </div>
          
//       </>
//     ) : (<div className="">Hello </div>
//     )}
// </div>







            <div className="py-16 w-full px-auto flex flex-wrap justify-center gap-2 md:gap-4  lg:gap-2  h-18 rounded-xl shadow-2xl">
          

{/* <div className="py-16 w-full px-auto flex flex-wrap justify-center gap-2 md:gap-4  lg:gap-2  h-18 rounded-xl shadow-2xl">
  {city.map((cityItem:string, index: number) => (
    <div key={index} className="flex items-center border shadow-2xl py-1 px-2 hover:px-1 cursor-pointer rounded-lg pr-2 my-1 mx-1 duration-150 ease-in hover:font-extrabold">
      {cityItem}
    </div>
  ))}
</div> */}


            {users.map((index: { [x: string]: ReactNode; cities: any }) => {
              return (
                <div key={index.cities}>
                  <Link href={`/${index.cities}`}>
                    <div className="flex items-center border shadow-2xl py-1 px-2 hover:px-1 cursor-pointer rounded-lg pr-2 my-1 mx-1 duration-150 ease-in hover:font-extrabold  ">
                      {index?.state}
                    </div>
                  </Link>
                </div>
              );
            })} 
          </div>


    //  </div>
    // <div className="h-screen  flex flex-col justify-center items-center">
    //     {'userData'?(<>
    //     hello
    //     {/* <h1 className='text-3xl'>hello user</h1>
    //     <div className="">ID:{userData.id}</div>
    //     <div className="">username:{userData.username}</div>
    //     <div className="">email:{userData.email}</div>
    //    <div className=""> phone:{userData.phone}</div>
    //     <div className="">website:{userData.website}</div>
//     <div className="">company:{userData.company.name}</div>  */}
//  </>):
    //  <div className="">no data</div>
    //  }
        
    //     </div>

    )
    
}


export async function generateStaticParams() {
    const getUserlist= getuser();
    const users = await getUserlist;
    return users.map((user) =>  ({
        userId: user.state.toString(),
    }))
}


// return users.map((user: { id: { toString: () => any; }; })=>({
    //     userId: user.id.toString()
    // }))








    // const state = users.map((user) => 
    // {
    //     return user.state.toString()
    // })
    // const user = users.map((user: { state.: any; }) => ({
    //     user:state.name
    // }))