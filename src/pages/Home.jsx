// import "../styles/home.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Offert from "./Offert";
import Services from "./Services";
function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-no-repeat bg-cover bg-center w-full h-[100vh] bg-[url('https://c4.wallpaperflare.com/wallpaper/392/133/116/car-bmw-bmw-m4-wallpaper-thumb.jpg')]"
      >
        <Navbar />
      </section>
      <div className="w-full px-[2%] h-[100vh] bg-white text-dark">
        <Offert />
      </div>
      <div className="w-full px-[2%] h-[100vh] bg-white text-dark">
        <Services />
      </div>
      <div className="w-full h-[100vh] bg-white text-dark">
        <Contact />
      </div>
      <div className="w-full h-[200px] bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;
