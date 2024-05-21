"use client";
import { useState } from "react";
import AudioStream from "./components/audio_stream";
import { Textarea } from "@/components/ui/textarea";

const voiceId = "21m00Tcm4TlvDq8ikWAM";
const apiKey = "64daceb74fa4163b6d3f08215f2db41d";
const voiceSettings = {
  stability: 0.9,
  similarity_boost: 0.9,
};

export default function Home() {
  const [text, setText] = useState(
    "Life without inspiration is like a blank canvas."
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Textarea
        placeholder="Type your message here."
        className="w-[500px] mb-4"
        value={text}
        onChange={handleChange}
      />
      <AudioStream
        voiceId={voiceId}
        text={text}
        apiKey={apiKey}
        voiceSettings={voiceSettings}
      />
    </div>
  );
}
