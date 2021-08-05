import React, { ReactElement, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Page from "./components/Page";
import { menuItems } from "./constants";
import reducers from "./reducers";

interface Props {}

export const AppContext = React.createContext(null);

export default function App({}: Props): ReactElement {
  const [modal, dispatchModal] = useReducer(reducers.Modal, null);

  const [openPopup, setOpenPopup] = useState(false);
  return (
    <AppContext.Provider
      value={{ modal, dispatchModal, menuItems, openPopup, setOpenPopup }}
    >
      <div className="wrapper">
        <Header />
        <Page />
        <Footer />
      </div>
      <Modal />
    </AppContext.Provider>
  );
}
