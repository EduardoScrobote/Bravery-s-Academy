import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

type Header = {
  background: string;
  brightness: string;
};

function Header({ background, brightness }: Header) {
  return (
    <div>
      <div
        className={`absolute top-0 -z-10 w-full h-screen bg-center ${background} bg-no-repeat bg-cover ${brightness}`}
      ></div>
      <div className="flex text-white gap-[25%] w-[100%] justify-center mt-2">
        <img
          src="/logo.jpeg"
          alt="logo bravery"
          width={64}
          height={64}
          className="overflow-hidden rounded-xl"
        />
        <div className="flex justify-center items-center gap-8">
          <p className="text-lg font-semibold hover:bg-braves-secondary hover:cursor-pointer hover:scale-110 rounded-md p-2 transition duration-100">
            <Link to="/">Inicio</Link>
          </p>
          <div>
            <NavigationMenu />
          </div>
          <p className="text-lg font-semibold hover:bg-braves-secondary hover:cursor-pointer hover:scale-110 rounded-md p-2 transition duration-100">
            Feedbacks
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me//557582969889?text=Gostaria%20de%20saber%20mais%20sobre%20o%20coach"
              )
            }
            className="bg-braves-red hover:bg-flame bg-cover bg-center p-2 rounded-lg font-bold hover:scale-110 hover:cursor-pointer transition duration-300"
          >
            UP MMR!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
