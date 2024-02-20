import Button from "../../Button";
function Bravery() {
  return (
    <div className="w-full mt-32 flex flex-col p-12 gap-16 justify-center items-center">
      <img
        src="/Coach-Bravery.jpeg"
        alt="foto do coach bravery"
        className="rounded-full bg-cover w-[9rem] h-[9rem] scale-[2]"
      />
      <p className="text-4xl text-[#E7D006] mt-16">Igor "Bravery" Carvalho</p>
      <p className="text-white w-[28rem] text-2xl">
        Coach profissional de Dota 2 desde 2022, já alcançou{" "}
        <span className="text-[#E7D006] font-bold">7.000 MMR</span> e levou
        diversos alunos até os ranks mais altos,{" "}
        <span className="text-[#E7D006] font-bold">
          com alunos batendo a média de 6.000 MMR
        </span>
      </p>
      <Button />
    </div>
  );
}

export default Bravery;
