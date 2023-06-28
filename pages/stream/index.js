import Layout from "@/components/Layout";

const live = () => {
  return (
    <Layout title="라이브">
      <div className="py-10 space-y-6 divide-y-2">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="pt-4 px-4 ">
            <div className="w-full rounded-md bg-slate-300 aspect-video shadow-md" />
            <h3 className="font-medium text-gray-500 mt-2">
              Let&apos;s try Potao
            </h3>
          </div>
        ))}
        <button className="fixed bottom-20 right-6 bg-orange-400 rounded-full text-white p-2 hover:bg-orange-500 focus:bg-orange-400 transitions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default live;