import type { AppProps } from "next/app";
import "../styles/globals.css";
import BaseLayout from "../layout/baseLayout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
      </BaseLayout>

  );
}

export default MyApp;
