import IDcardFun from "./IDcardFun";
import Data from "../Data.json";
import IDcardClass from "./IDcardClass";


function IDCards(){
    console.log(Data.data);
    return(
        <>
        <h1>Hello from Mycards App!</h1>
        {/* Class components
        {Data.data.map(elm=>
         <IDcardClass key={elm.id} name={elm.name} age={elm.age} des={elm.des} />
        )} */}

{/* Function components */}
    {/* {Data.data.map(elm=>{
        return <IDcardFun key={elm.id} name={elm.name} age={elm.age} des={elm.des} />
        })} */}
        {Data.data.map(elm=>
         <IDcardFun key={elm.id} name={elm.name} age={elm.age} des={elm.des} />
        )}
   
        </>
    )
}
 
export default IDCards;







