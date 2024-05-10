import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt={t("example.logoVite")} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react"
            alt={t("example.logoReact")}
          />
        </a>
      </div>
      <h1>{t("example.title")}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("example.youHaveClickedXTimes", { count })}
        </button>
        <p>
          <Trans i18nKey="example.editAndSaveToTestHMR">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">{t("example.clickLogosToLearnMore")}</p>
    </>
  );
}

export default App;
