const sold = () => {
  return (
    <div className="px-4 py-10">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="flex border-b justify-between cursor-pointer py-2"
        >
          <div className="flex space-x-4">
            <div className="w-20 h-20 bg-gray-400 rounded-lg" />
            <div className="flex flex-col">
              <h3>New iPhone 14</h3>
              <span className="text-gray-400 text-sm">Black</span>
              <span className="font-bold">$95</span>
            </div>
          </div>
          <div className="flex items-end justify-end gap-2">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-red-500  hover:fill-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              <span>1</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>1</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default sold;