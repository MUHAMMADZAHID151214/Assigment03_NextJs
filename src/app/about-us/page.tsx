import Link  from "next/link"
export default function About(){
    return(
 
<div className="container">
      <div className="header">
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
        </ul>
        <ul>
          <Link href={"/about-us"}>
            <li>About us</li>
          </Link>
        </ul>
        <ul>
          <Link href={"/contact-us"}>
            <li>Contact us</li>
          </Link>
        </ul>
        <ul>
          <Link href={"/education"}>
            <li>Education</li>
          </Link>
        </ul>
      </div>
               
<div className="about">
        <h1>About Us</h1>
        <p>
          Hi, I am Muhammad Zahid, a BSCS student at PAF-KIET, specializing in 
          emerging fields like Web3.0, Metaverse, and AI. My focus is on pushing 
          boundaries and developing practical solutions with future-oriented technologies. 
          Currently enrolled in a certification from the Governor Sindh Initiative, I am 
          excited to explore innovative solutions that can reshape industries and improve 
          peoples lives.
        </p>
      </div>
      </div>
 
    ) 
}