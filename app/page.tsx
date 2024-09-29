
import Link from "next/link"

 export default function home(){
  return (
    <div>
       <h1>This is my home page</h1>
    <Link href="/contact">contact</Link>

    <Link href="/navbar">navbar</Link> 
    
     <Link href="/about">About</Link>

     <Link href= "/footer">footer</Link>
     
    </div>
    
  )
}


