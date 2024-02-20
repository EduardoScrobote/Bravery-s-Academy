import "./App.css";
import Bravery from "./components/coachs/Bravery/Bravery";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[75%] flex bg-no-repeat bg-cover bg-center bg-main-bg"></div>
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center">
          <p className="text-white text-3xl">
            Alcance o <span className="text-[#E7D006] font-bold">MMR</span> dos
            seus sonhos com a Bravery`s Academy!
          </p>
          <img
            src="IMMORTAL.png"
            alt="flag-immortal"
            width={300}
            height={80}
            className="mt-8"
          />
        </div>
      </div>
      <Bravery />
    </div>
  );
}

export default App;
