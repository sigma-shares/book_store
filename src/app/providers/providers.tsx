import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import type { Router } from "@remix-run/router";
import store from "../store";

type Props = {
  router: Router;
};

export const Providers = ({ router }: Props) => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
