import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Router from 'routes/Router.tsx'
import store from 'store';
import 'common/locales/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
