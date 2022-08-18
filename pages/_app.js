import store from "@redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
