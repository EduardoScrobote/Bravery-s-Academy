import { FaPix } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex text-white w-full h-[900px] justify-center items-center bg-braves-secondary">
      <div className="w-[75%] h-full  gap-16 flex flex-col justify-center items-center">
        <div className="flex flex-col  h-[250px] max-w-[275px]">
          <h1 className="font-bold">Bravery`s Academy</h1>
          <p className="mt-4 text-sm">
            Dota é uma marca registrada da Valve Corp, Inc. Nós não somos de
            nenhuma forma afiliados, associados ou endossado pela Valve Crop,
            Inc. Todos os direitos autoriais, marcas imagens e marcas de serviço
            pertecem a seus respectivos proprietários.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 h-[250px]  max-w-[350px]">
          <h1 className="font-bold">Serviços</h1>
          <div className="flex">
            <p className="mt-4 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
              <span className="mr-2">&#8226;</span>
              <Link to="/coach">Coach individual</Link>
            </p>
            <p className="mt-4 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
              <span className="mr-2">&#8226;</span>
              Coach para equipes
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[250px]  max-w-[350px]">
          <h1 className="font-bold">Contato</h1>
          <div className="flex justify-center items-center">
            <p
              onClick={() =>
                window.open(
                  "https://wa.me//557582969889?text=Gostaria%20de%20saber%20mais%20sobre%20o%20coach"
                )
              }
              className="mt-5 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300"
            >
              <span className="mr-2">&#8226;</span>
              Whatsapp
            </p>
            <p className="mt-4 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
              <span className="mr-2">&#8226;</span>
              E-mail
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start h-[250px]  max-w-[350px]">
          <h1 className="font-bold">Formas de pagamento</h1>
          <div className="flex gap-8">
            <div className="mt-2 mb-2 ml-2 flex hover:cursor-pointer hover:text-pix hover:scale-110 duration-300">
              <span className="mr-2">&#8226;</span>
              <FaPix size={24} />
            </div>
            <div className="mt-2 mb-2 ml-2 flex hover:cursor-pointer hover:text-yellow-400 hover:scale-110 duration-300">
              <span className="mr-2">&#8226;</span>
              <IoCardOutline size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
