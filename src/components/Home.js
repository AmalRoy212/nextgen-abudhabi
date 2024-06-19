import Header from "./Header";
import HighlightText from "./HighlightText";
import Banner from "../assets/images/Arab.jpeg";
import UIClogo from "../assets/images/UIC.png";

const Home = () => {
  return (
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      <section
        className="relative bg-cover bg-center xl:h-screen sm:h-screen md:h-screen items-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <Header logo={UIClogo} />

        <div className="max-w-[950px] xl:py-0 py-11 xl:max-w-[850px] xl:px-0 px-7 flex flex-col gap-5 mx-auto items-center justify-between text-center relative z-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-center xl:mt-16 md:mt-24 sm:mt-14 font-bold text-white">
            THE UIC DATA ANALYTICS & LOW CODE NO CODE CONFERENCE{" "}
            <HighlightText text={"& AWARDS 2024"} />
          </h1>

          <div className="w-1/12 h-1 mt-1 bg-deepBlue mx-auto"></div>

          <div className="flex gap-4 items-center justify-center">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-center text-[#cdd1d6]">
              Hosted by
            </h2>
            <a href="/" className="cursor-pointer">
              <img
                src={UIClogo}
                className="w-[100px] md:w-[130px]"
                alt="UIC Logo"
              />
            </a>
          </div>

          <p className="text-md sm:text-lg md:text-2xl mt-2 text-center bg-gradient-to-b from-[#eef1f3] via-[#dee2e4] to-[#98b5a4] text-transparent bg-clip-text font-bold">
            11 SEPTEMBER 2024, RIYADH, SAUDI ARABIA
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default Home;