import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import HeroText from "./components/HeroText";
import backgroundImage from "./assets/bg.png";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div style={backgroundStyle}>
      <Navbar></Navbar>
      <div className="flex justify-center items-center">
        <HeroText></HeroText>
        <HeroImage></HeroImage>
      </div>
    </div>
  );
}

export default App;

