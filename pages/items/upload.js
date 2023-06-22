const upload = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <div className="flex items-center justify-center border-4 border-dashed h-80 rounded-md text-gray-600 hover:text-orange-600">
          <label>
            <svg
              className="h-12 w-12 cursor-pointer"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="price">Price</label>
        <div className="relative flex items-center">
          <div className="absolute left-0 pl-2 pointer-events-none text-gray-500 font-bold">
            <span>$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="pl-6 w-full rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          />
          <div className="absolute right-2 pointer-events-none text-gray-500 font-bold">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="mt-2">Description</label>
        <div>
          <textarea
            rows={4}
            className="w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          />
        </div>
      </div>
      <button className="mt-2 bg-orange-400 w-full border py-2 rounded-lg text-white font-bold hover:bg-orange-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
        Upload product
      </button>
    </div>
  );
};

export default upload;
