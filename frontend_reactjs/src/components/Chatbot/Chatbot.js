import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "1e782ee5ea7d823edf8ae637591ac0e61",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
        quickReplies: ["Speak with an Agent", "Book a Demo", "Sample Bots"],
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
  return <></>;
}

export default Chatbot;
