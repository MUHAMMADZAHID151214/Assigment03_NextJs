
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
      <div className="education">
  <h1>Education</h1>
  <div className="education-details">
    <h2>BSCS - Bachelor of Science in Computer Science</h2>
    <p><strong>Institution:</strong> PAF-Karachi Institute of Economics & Technology (PAF-KIET)</p>
    <p><strong>Duration:</strong> 2020 - Present</p>
    <p>
      I am currently pursuing my Bachelor’s degree in Computer Science from PAF-KIET. 
      My coursework has provided me with a solid foundation in core computer science 
      topics such as Data Structures, Algorithms, Software Engineering, and Web Development. 
      I am particularly interested in modern technologies like Web3.0, AI, and Metaverse.
    </p>
    <h3><strong>Special Certifications:</strong></h3>
    <ul>
      <li>Web3.0, Metaverse, and AI Course/Cloud Applied Generative AI Engineering (Governor Sindh Initiative)</li>
      
    </ul>
  </div>
</div>

      </div>
      
    ) 
}