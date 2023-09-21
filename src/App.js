import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import HeroText from "./components/HeroText";
import backgroundImage from "./assets/bg.png";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={backgroundStyle} className="w-screen h-screen">
      <Navbar></Navbar>
      <div className="flex justify-center items-center mx-10">
        <HeroText></HeroText>
        <HeroImage></HeroImage>
      </div>
    </div>
  );
}

export default App;

