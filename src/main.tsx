import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/providers/store.ts";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// доработать компонент модалки, что бы он отвчал за вывод заголовка(props).
// вернуть кнопку закрытия в модалке, также если кликать за область модалки она должна закрываться.
