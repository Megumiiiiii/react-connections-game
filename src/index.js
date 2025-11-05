import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { sdk } from "@farcaster/miniapp-sdk";
import App from "./components/App";

import "./reset.css";
import "./styles.css";

function Root() {
  useEffect(() => {
    // ✅ beri tahu Farcaster kalau miniapp sudah siap
    sdk.actions.ready();

    // (opsional) ambil info user Farcaster yang membuka miniapp
    sdk.context.getUser().then((user) => {
      console.log("User Farcaster:", user);
    });
  }, []);

  return <App />;
}

const root = createRoot(document.querySelector("#root"));
root.render(<Root />);
