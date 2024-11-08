import Image from "next/image";
import image from "../public/female__employee__staff__user__avatar-512.png";
import Header from "../app/components/header";
import Footer from "../app/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="content">
          <div className="heading">
            I&apos;m <span>Maheen</span>
          </div>

          <p>
            &quot;I am a front-end developer skilled in HTML, CSS, JavaScript, and TypeScript. I focus on creating responsive, user-friendly web interfaces and am keen on learning new technologies.&quot;
          </p>
        </div>
        <Image className="profile-image" src={image} alt="profile-image" />
      </div>
      <Footer />
    </div>
  );
}
