import { useEffect } from "react";

const CONTAINER_ID = "container-272c9d71cc235c9077a71bec4e2c70cb";
const SCRIPT_SRC = "https://pl29266201.profitablecpmratenetwork.com/272c9d71cc235c9077a71bec4e2c70cb/invoke.js";

export default function AdsterraWidget() {
  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (!container || container.childElementCount > 0) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = SCRIPT_SRC;
    container.appendChild(script);
  }, []);

  return <div id={CONTAINER_ID} />;
}
