
import Link  from "next/link"
export default function Contact(){
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
        
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" placeholder="   Enter your name" /><br /><br />

          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" placeholder="   Enter Your email" /><br /><br />

          <label htmlFor="message">Message</label><br />
          <textarea id="message" name="message" placeholder="   Enter Your message"></textarea><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
      
    ) 
}