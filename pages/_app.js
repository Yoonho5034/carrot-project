import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="max-w-lg mx-auto w-full">
      <Component {...pageProps} />
    </div>
  );
}
