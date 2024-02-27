import { Link } from "react-router-dom";

type Header = {
  background: string;
};

function Header({ background }: Header) {
  return (
    <div>
      <div
        className={`absolute top-0 -z-10 w-full h-screen bg-center ${background} bg-no-repeat bg-cover brightness-50`}
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
          <p className="text-lg font-semibold hover:bg-braves-secondary hover:cursor-pointer hover:scale-110 rounded-md p-2 transition duration-300">
            <Link to="/coach">Coach</Link>
          </p>
          <p className="text-lg font-semibold hover:bg-braves-secondary hover:cursor-pointer hover:scale-110 rounded-md p-2 transition duration-100">
            Feedbacks
          </p>
          <button className="bg-braves-red hover:bg-flame bg-cover bg-center p-2 rounded-lg font-bold hover:scale-110 hover:cursor-pointer transition duration-300">
            UP MMR!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
