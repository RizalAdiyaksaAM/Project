import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryBoyur = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextUIProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryBoyur}>
        <Provider store={store}>
          <ToastContainer />
          <RouterList />
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  </NextUIProvider>
);
