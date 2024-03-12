function MobileBenefits() {
  return (
    <div className=" w-full flex flex-col items-center h-[947px] rounded-lg mt-[145px] ">
      <div className="bg-[#d9d9d9] w-full h-[24rem] rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-[22px] text-white font-bold">
          Conquistas da Bravery`s Academy
        </h1>
        <div className="w-full flex flex-col p-4 justify-center items-center">
          <div className="flex flex-col border-b-4 border-black w-full items-center p-8 justify-center">
            <h1 className="text-braves-red text-2xl text-[52px] font-bold ">
              +1000h
            </h1>
            <p className="text-sm mt-2 ml-2">Ensinando dota 2</p>
          </div>
          <div className="flex flex-col border-b-4 border-black w-full items-center p-8 justify-center">
            <h1 className="text-braves-red text-2xl text-[52px] font-bold ">
              +30
            </h1>
            <p className="text-lg mt-2 ml-2">Alunos satisfeitos</p>
          </div>
          <div className="flex flex-col w-full items-center p-8 justify-center">
            <h1 className="text-braves-red text-2xl text-[52px] font-bold ">
              +20000
            </h1>
            <p className="text-lg mt-2 ml-2">MMR ganho</p>
          </div>
        </div>
      </div>
      <div className=" w-[100%] p-4 h-[16rem] mt-[250px] flex flex-col items-center m-32 gap-12 justify-center">
        <div className="w-full h-[175px] bg-black border hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] shadow-white p-4 border-white rounded-[24px] flex flex-col hover:shadow-braves-red hover:text-braves-red hover:border-braves-red hover:scale-110 duration-300 cursor-default">
          <h1 className="text-white text-xl font-bold">
            Grupo de WhatsApp para os alunos do coaching
          </h1>
          <p className="text-slate-300 text-sm mt-4">
            interaja, faça amigos, discuta estratégias, metas, monte grupos e
            garanta a vitória.
          </p>
        </div>
        <div className=" w-[100%] p-4 h-[16rem] bg-black border hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] shadow-white  border-white rounded-[24px] flex flex-col  hover:shadow-braves-red hover:text-braves-red hover:border-braves-red  hover:scale-110 duration-300 cursor-default">
          <h1 className="text-white text-xl font-bold">Metodologia flexível</h1>
          <p className="text-slate-300 text-sm mt-4">
            o professor identificará seus principais erros e explicará
            conceitos, treinos e ideias de maneira eficiente e adaptável, para
            se adequar a cada forma de aprendizado dos alunos!
          </p>
        </div>
        <div className="w-[100%] h-[16rem] bg-black border hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] shadow-white p-4 border-white rounded-[24px] flex flex-col  hover:shadow-braves-red hover:text-braves-red hover:border-braves-red  hover:scale-110 duration-300 cursor-default">
          <h1 className="text-white text-xl font-bold">Lobbies entre alunos</h1>
          <p className="text-slate-300 text-sm mt-4">
            Lobbies semanais promovem jogos entre alunos, proporcionando
            evolução conjunta, aprendizado e partidas de alto nível com
            jogadores Imortais e Divines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileBenefits;
