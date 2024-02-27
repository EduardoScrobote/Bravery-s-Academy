import { FaPix } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="flex text-white w-full h-[375px] justify-center items-center bg-braves-secondary">
      <h1 className="flex absolute text-pix font-bold left-0 items-end w-46 text-sm top-[420%]">
        Powerd by Eduardo Scrobote Dev
      </h1>
      <div className="w-[75%] h-full  gap-16 flex justify-center items-center">
        <div className="flex flex-col  h-[250px] max-w-[275px]">
          <h1 className="font-bold">Bravery`s Academy</h1>
          <p className="mt-4 text-sm">
            Dota é uma marca registrada da Valve Corp, Inc. Nós não somos de
            nenhuma forma afiliados, associados ou endossado pela Valve Crop,
            Inc. Todos os direitos autoriais, marcas imagens e marcas de serviço
            pertecem a seus respectivos proprietários.
          </p>
        </div>
        <div className="flex flex-col items-start h-[250px]  max-w-[350px]">
          <h1 className="font-bold">Serviços</h1>
          <p className="mt-4 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
            <span className="mr-2">&#8226;</span>
            Coach individual
          </p>
          <p className="mt-2 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
            <span className="mr-2">&#8226;</span>
            Coach para equipes
          </p>
        </div>
        <div className="flex flex-col items-start h-[250px]  max-w-[350px]">
          <h1 className="font-bold">Contato</h1>
          <p className="mt-4 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
            <span className="mr-2">&#8226;</span>
            Whatsapp
          </p>
          <p className="mt-2 mb-2 ml-2 hover:cursor-pointer hover:text-braves-red hover:scale-110 duration-300">
            <span className="mr-2">&#8226;</span>
            E-mail
          </p>
        </div>
        <div className="flex flex-col items-start h-[250px]  max-w-[350px]">
          <h1 className="font-bold">Formas de pagamento</h1>
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
  );
}

export default Footer;
