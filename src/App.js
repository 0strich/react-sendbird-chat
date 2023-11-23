import "./App.css";
import "@sendbird/uikit-react/dist/index.css";
import "./styles/sendbirdOverrides.css";
import { useEffect, useState } from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import { APP_ID, USER_ID, NICKNAME } from "./configs/const";
import DesktopView from "./components/DesktopView";
import MobileView from "./components/MobileView";

function App() {
  const [mobileViewOpen, setMobileViewOpen] = useState(false);

  const myColorSet = {
    "--sendbird-light-primary-100": "rgb(195, 241, 169)",
    "--sendbird-light-primary-300": "rgb(165, 211, 149)",
    "--sendbird-light-primary-400": "rgb(136, 188, 132)",
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth < 900) {
      setMobileViewOpen(true);
    } else {
      setMobileViewOpen(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth < 900) {
      setMobileViewOpen(true);
    } else {
      setMobileViewOpen(false);
    }
  }, []);

  if (!APP_ID) return <p>Set APP_ID in const.js</p>;
  return (
    <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
      {mobileViewOpen ? <MobileView /> : <DesktopView />}
    </SBProvider>
  );
}

export default App;
