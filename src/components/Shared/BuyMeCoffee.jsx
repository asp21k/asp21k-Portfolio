import React, { useEffect } from "react";

export default function Buymeacoffee() {
  useEffect(() => {
    if (window.innerWidth > 1) {
      // Adjust the width as needed
      const script = document.createElement("script");
      const div = document.getElementById("supportByBMC");
      script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
      script.setAttribute("data-name", "BMC-Widget");
      script.setAttribute("data-cfasync", "false");
      script.setAttribute("data-id", "asp21k");
      script.setAttribute("data-description", "Support me on Buy me a coffee!");
      script.setAttribute(
        "data-message",
        "Hi there. You can buy me a coffee to support!",
      );
      script.setAttribute("data-color", "#ff5100");
      script.setAttribute("data-position", "Right");
      script.setAttribute(
        "data-latest-msg",
        "Thanks to [latest supporter] for the support!",
      );
      script.setAttribute("data-send-email", "true");
      script.setAttribute("data-x_margin", "25");
      script.setAttribute("data-y_margin", "25");

      script.onload = function () {
        var evt = document.createEvent("Event");
        evt.initEvent("DOMContentLoaded", false, false);
        window.dispatchEvent(evt);
      };

      div.appendChild(script);
    }
  }, []);

  return <div id="supportByBMC"></div>;
}
