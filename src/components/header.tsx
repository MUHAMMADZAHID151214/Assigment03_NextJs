import Link from "next/link";

export default function Header() {
  return (
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
      <div className="intro">
        <h1>Muhammad Zahid</h1>
        <h2>
          BSCS Student PAF-KIET <br />
          <span> Web3.0, Metaverse & AI Enthusiast</span>
        </h2>
      </div>
      <div className="para">
        <p>
          Welcome to my personal website! I’m currently pursuing my Bachelor’s
          in <br />
          Computer Science at PAF-KIET, where I’m passionate about leveraging{" "}
          <br />
          technology to create innovative solutions. Alongside my degree, I am{" "}
          <br />
          enrolled in a specialized course on Web3.0, Metaverse, and AI through{" "}
          <br />
          the Governor Sindh Initiative, which allows me to explore cutting-edge{" "}
          <br />
          technologies that shape the future!
        </p>
      </div>
    </div>
  );
}
