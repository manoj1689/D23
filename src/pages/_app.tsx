import { Open_Sans } from "next/font/google";
import type { AppProps } from "next/app";

import "../app/globals.css";


const RobotoFont = Open_Sans({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
      <div className={RobotoFont.className}>
        <Component {...pageProps} />
      </div>

  );
}

export default MyApp;
