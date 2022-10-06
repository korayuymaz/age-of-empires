// app.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function ProvidersWrapper({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}

test("full app rendering/navigating", async () => {
  render(<App />, { wrapper: ProvidersWrapper });
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Units/i));
  expect(screen.getByText(/Units Page/i)).toBeInTheDocument();
});
