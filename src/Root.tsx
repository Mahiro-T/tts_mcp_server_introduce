import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";

// シーンの定義（フレーム単位、30fps）- 音声長に合わせて調整
const SCENE_FRAMES = {
  scene1: 571,   // 0-571フレーム（0-19.04秒）narration1.wav
  scene2: 285,   // 571-856フレーム（19.04-28.56秒）narration2.wav
  scene3: 268,   // 856-1124フレーム（28.56-37.52秒）narration3.wav
  scene4: 266,   // 1124-1390フレーム（37.52-46.40秒）narration4.wav
  scene5: 223,   // 1390-1613フレーム（46.40-53.84秒）narration5.wav
};

const TOTAL_FRAMES = Object.values(SCENE_FRAMES).reduce((a, b) => a + b, 0);

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="TTSIntro"
        component={MyComposition}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
