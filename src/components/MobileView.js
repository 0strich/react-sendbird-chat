import React, { useState } from "react";
import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";
import IconArrowLeft from "../styles/icon-arrow-left.svg";

export default function DesktopView() {
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState(
    "sendbird_group_channel_133855150_cf97aa97a155c7cdd33e68f678d23891b8b6c6cb"
  );

  const onBack = () => {
    setCurrentChannelUrl("");
  };
  const conversationWrap = document.getElementsByClassName(
    "sendbird-app__conversation-wrap"
  )[0];

  const renderSettingsBar = () => {
    conversationWrap.style.marginRight = "318px";
  };
  const hideSettingsBar = () => {
    conversationWrap.style.marginRight = "0px";
  };

  return (
    <div className="mobile-view__wrap">
      <div className="sendbird-app__conversation-wrap">
        <button className="back-button" onClick={onBack}>
          <img width={20} height={20} src={IconArrowLeft} alt="Back button" />
        </button>
        <SBConversation
          channelUrl={currentChannelUrl}
          onChatHeaderActionClick={() => {
            setShowSettings(true);
            renderSettingsBar();
          }}
        />
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <SBChannelSettings
              channelUrl={currentChannelUrl}
              onCloseClick={() => {
                setShowSettings(false);
                hideSettingsBar();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
