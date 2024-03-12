function Bravery() {
  return (
    <div className="flex flex-col justify-center gap-16 items-center w-full h-[900px]">
      <h1 className="text-braves-red text-center font-bold text-[36px]">
        Igor “Bravery” Carvalho
      </h1>
      <div className="flex flex-col p-12 gap-32 justify-center items-center">
        <img
          src="/igor-cabeca-quadrada.jpg"
          alt="foto do coach bravery"
          className="rounded-lg w-[8rem] h-[8rem] bg-cover scale-[2]"
        />
        <div className="w-full">
          <h1 className="text-white text-[24px]">
            Coach profissional de dota 2 desde 2022, já alcançou{" "}
            <span className="text-braves-red font-semibold">7.000 MMR</span> e
            levou diversos alunos até os ranks mais altos,{" "}
            <span className="text-braves-red font-semibold">
              com alunos batendo a média dos 6.000MMR
            </span>
          </h1>
        </div>
      </div>
      <button className="text-white bg-braves-red h-14 mb-8 p-4 rounded-lg font-bold hover:scale-125 duration-300">
        Quero ganhar MMR
      </button>
    </div>
  );
}

export default Bravery;
