import { useEffect,useState } from "react";

export default function Demo(){
  const [count,setCount] =  useState(0);

  useEffect(()=>{
    console.log("useEffect")
    const timer = setTimeout(()=>{
      console.log("setTimeout",count)
    },3000);
    return ()=>{
      console.log("useEffect cleanup")
      clearTimeout(timer)
    }
  },[])
  
  return (
    <button className={"px-10 py-4 text-center rounded-sm bg-gray-500 text-white"} onClick={()=>setCount(count+1)}>click</button>
  )

}