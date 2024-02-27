type Button = {
  text: string;
  height?: string;
  width?: string;
  m?: string;
};
function Button({ text, height, width, m }: Button) {
  return (
    <div>
      <button
        className={`bg-braves-red ${height} ${width} ${m} hover:bg-flame  bg-cover bg-center p-2 rounded-lg font-bold hover:scale-110 hover:cursor-pointer transition duration-300`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
