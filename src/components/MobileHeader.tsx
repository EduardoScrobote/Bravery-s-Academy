type Header = {
  background: string;
  brightness: string;
};

function MobileHeader({ background, brightness }: Header) {
  return (
    <div>
      <div
        className={`absolute top-0 -z-10 w-full h-screen bg-center ${background} bg-no-repeat bg-cover ${brightness}`}
      ></div>
      <div className="flex text-white justify-end p-8 mt-2">
        <img
          src="/logo.jpeg"
          alt="logo bravery"
          width={75}
          height={75}
          className="overflow-hidden rounded-xl"
        />
      </div>
    </div>
  );
}

export default MobileHeader;
