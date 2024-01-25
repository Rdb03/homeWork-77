import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>,
)
