import { useEffect, useState } from "react";

const DEFAULT_SETTING = true;

export default function useGetPreferredTheme() {
  const [withAudio, setWithAudio] = useState<boolean>(DEFAULT_SETTING);

  useEffect(() => {
    try {
      const pastPreferredWithAudioSetting = JSON.parse(
        window.localStorage.getItem("withAudio")
      );

      if (pastPreferredWithAudioSetting) {
        setWithAudio(pastPreferredWithAudioSetting);
      } else {
        setWithAudio(DEFAULT_SETTING);
      }
    } catch (_) {
      setWithAudio(DEFAULT_SETTING);
    }
  }, []);

  function handleSetWithAudio() {
    const newWithAudioState = !withAudio;

    try {
      window.localStorage.setItem(
        "withAudio",
        JSON.stringify(newWithAudioState)
      );
    } catch (_) {}

    setWithAudio(newWithAudioState);
  }

  return [withAudio, handleSetWithAudio];
}
