// pages/about.js
import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="about-bg">
        <h1 className="about-container">
          This Is The Section Of &quot;About-Us&quot;
        </h1>
      </div>
      <Footer />
    </div>
  );
}
