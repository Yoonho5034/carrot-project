import React from "react";

const Alert = ({ message, visible, setVisible }) => {
  const onClick = () => {
    setVisible(false);
  };
  return (
    <div
      className={`flex items-center justify-center ${
        visible ? "block" : "hidden"
      } z-50`}
    >
      <div className="w-[100vw] h-[100vh] bg-black opacity-50 fixed top-0 left-0" />
      <div className="w-[300px] h-[150px] bg-white opacity-100 absolute rounded-xl p-6">
        <div className="relative w-full h-full">
          <p className="text-center mt-2 font-bold">{message}</p>
          <p
            onClick={onClick}
            className="absolute bottom-0 text-center w-full bg-orange-400 p-1 rounded-lg text-white font-bold cursor-pointer"
          >
            확인
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
