import { useState } from "react";
import AudioStream from "./components/AudioStream";

const voiceId = "21m00Tcm4TlvDq8ikWAM";
const text = "Hello, this is a sample text to stream as speech.";
const apiKey = "64daceb74fa4163b6d3f08215f2db41d";
const voiceSettings = {
  stability: 0,
  similarity_boost: 0,
};

export default function Home() {
  return (
    <div>
      <AudioStream
        voiceId={voiceId}
        text={text}
        apiKey={apiKey}
        voiceSettings={voiceSettings}
      />
    </div>
  );
}
