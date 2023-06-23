const ChatDeatil = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-400" />
        <div className="text-gray-600 font-semibold border p-2 rounded-md border-gray-500">
          Hi how much are you selling them for?
        </div>
      </div>
      <div className="flex flex-row-reverse items-center space-x-reverse space-x-2 ">
        <div className="w-8 h-8 rounded-full bg-gray-400" />
        <div className="text-gray-600 font-semibold border p-2 rounded-md border-gray-500">
          I want ￦20,000
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-400" />
        <div className="text-gray-600 font-semibold border p-2 rounded-md border-gray-500">
          미쳤어
        </div>
      </div>
      <div className="fixed w-full mx-auto max-x-md bottom-4 inset-x-0 px-4">
        <div className="flex items-center relative ">
          <input
            type="text"
            className="w-full rounded-full pr-8  focus:ring-orange-400 focus:outline-none focus:border-orange-400"
          />
          <div className="absolute right-2 bg-orange-400 px-2 rounded-full text-white hover:bg-orange-500">
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDeatil;
