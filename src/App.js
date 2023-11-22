import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";
import { APP_ID, USER_ID, NICKNAME } from "./configs/const";
import SendbirdGroupChat from "./SendbirdGroupChat";

function App() {
  if (!APP_ID) {
    return <p>Set APP_ID in const.js</p>;
  }
  return (
    <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
      <SendbirdGroupChat />
    </SBProvider>
  );
}

export default App;
