// src/components/ShareButton.js
import React from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function ShareButton({ score, visible }) {
  if (!visible) return null;

  const shareToFarcaster = async () => {
    try {
      await sdk.actions.openCompose({
        text: `🎮 I just won the connections game with score ${score}! LFG 😎`,
      });
    } catch (err) {
      console.error("Can't open composer Farcaster:", err);
      alert("TCan't open composer (open it on Farcaster miniapp).");
    }
  };

  return (
    <button
      onClick={shareToFarcaster}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg mt-4 hover:bg-purple-700 transition"
    >
      Share ke Farcaster
    </button>
  );
}
