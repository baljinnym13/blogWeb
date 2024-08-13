import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import MyProvider from "@/provider/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </MyProvider>
  );
}
