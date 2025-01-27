import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './state/store'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./route";
import Modal from "./components/modal";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Modal />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
