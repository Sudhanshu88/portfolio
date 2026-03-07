import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sudhanshu Ranjan Portfolio</title>
      </Head>
      <div>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </div>
    </>
  );
}
