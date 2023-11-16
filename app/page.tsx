import { ReactNode } from "react";
import Slider from "./component/Slider";
import State from "./component/output";



export default function Home() {
  const jsonData:any = State();
  var arrayItem = jsonData[0];
  // console.log(arrayItem["New York"]);
  const stateCities:any = jsonData[0]["Tennessee"];
stateCities.forEach((cityData: any) => {
  // console.log(cityData.city);
  // console.log(cityData.population)
  // console.log(cityData.zips);
});
const data = [
  // Your JSON data her
];

const states: string[] = Object.keys(jsonData[0]);

states.forEach((state: string) => {
  const stateData = jsonData[0][state];
  stateData.forEach((cityData: any) => {
    // console.log(cityData.city);
  });
  // console.log(`${state}`);
});

// console.log(jsonData)

//   const getUserlist = State();
//   const users:any =  getUserlist[0];
//   // console.log(users);
//  const hub= users.map((user:any) => {
//     console.log(user.city); 
//    });
//   // console.log(users.state)
//   // for (let i = 0; i < users.length; i++) {
//   //   console.log(users[i].city); 
//   //  }

  return (
    <div className="" >
      {}
         
      <div className="">
        <div className="slider ">
      

          {/* <Slider /> */}
        </div>
      </div>
    </div>
  );
}
