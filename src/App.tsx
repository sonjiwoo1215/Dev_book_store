import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { getTheme, ThemeName } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>,
  },
  {
    path: "/signup",
    element: <Layout><div><Signup /></div></Layout>,
  }
])

function App() {

  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
        <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
