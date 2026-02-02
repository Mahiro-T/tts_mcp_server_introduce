import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
} from "remotion";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Install } from "./scenes/Scene2Install";
import { Scene3Workflow } from "./scenes/Scene3Workflow";
import { Scene4Features } from "./scenes/Scene4Features";
import { Scene5Ending } from "./scenes/Scene5Ending";
import { interpolate } from "remotion";

// シーンの定義（フレーム単位、30fps）- 音声長に合わせて調整
const SCENE_FRAMES = {
  scene1: 571,   // 0-571フレーム（0-19.04秒）narration1.wav
  scene2: 285,   // 571-856フレーム（19.04-28.56秒）narration2.wav
  scene3: 268,   // 856-1124フレーム（28.56-37.52秒）narration3.wav
  scene4: 266,   // 1124-1390フレーム（37.52-46.40秒）narration4.wav
  scene5: 223,   // 1390-1613フレーム（46.40-53.84秒）narration5.wav
};

// 音声コントロール用コンポーネント
const AudioTrack = () => {
  const fadeInFrames = 5; // フェードイン時間（フレーム）- 非常に短く
  const fadeOutFrames = 5; // フェードアウト時間（フレーム）- 非常に短く

  // 各シーンの開始フレーム
  const scene2Start = SCENE_FRAMES.scene1;
  const scene3Start = SCENE_FRAMES.scene1 + SCENE_FRAMES.scene2;
  const scene4Start = SCENE_FRAMES.scene1 + SCENE_FRAMES.scene2 + SCENE_FRAMES.scene3;
  const scene5Start = SCENE_FRAMES.scene1 + SCENE_FRAMES.scene2 + SCENE_FRAMES.scene3 + SCENE_FRAMES.scene4;

  return (
    <>
      {/* シーン1: 導入 - narration1.wav (0〜571フレーム) */}
      <Sequence from={0} durationInFrames={SCENE_FRAMES.scene1}>
        <Audio
          src={staticFile("narration1.wav")}
          volume={(f) => {
            // 短いフェードイン
            if (f < fadeInFrames) {
              return interpolate(f, [0, fadeInFrames], [0, 1], { extrapolateRight: "clamp" });
            }
            // 短いフェードアウト
            if (f > SCENE_FRAMES.scene1 - fadeOutFrames) {
              return interpolate(f, [SCENE_FRAMES.scene1 - fadeOutFrames, SCENE_FRAMES.scene1], [1, 0], { extrapolateLeft: "clamp" });
            }
            return 1;
          }}
        />
      </Sequence>

      {/* シーン2: インストール方法 - narration2.wav (571〜856フレーム) */}
      <Sequence from={scene2Start} durationInFrames={SCENE_FRAMES.scene2}>
        <Audio
          src={staticFile("narration2.wav")}
          volume={(f) => {
            // 短いフェードイン
            if (f < fadeInFrames) {
              return interpolate(f, [0, fadeInFrames], [0, 1], { extrapolateRight: "clamp" });
            }
            // 短いフェードアウト
            if (f > SCENE_FRAMES.scene2 - fadeOutFrames) {
              return interpolate(f, [SCENE_FRAMES.scene2 - fadeOutFrames, SCENE_FRAMES.scene2], [1, 0], { extrapolateLeft: "clamp" });
            }
            return 1;
          }}
        />
      </Sequence>

      {/* シーン3: 使用方法とワークフロー - narration3.wav (856〜1124フレーム) */}
      <Sequence from={scene3Start} durationInFrames={SCENE_FRAMES.scene3}>
        <Audio
          src={staticFile("narration3.wav")}
          volume={(f) => {
            // 短いフェードイン
            if (f < fadeInFrames) {
              return interpolate(f, [0, fadeInFrames], [0, 1], { extrapolateRight: "clamp" });
            }
            // 短いフェードアウト
            if (f > SCENE_FRAMES.scene3 - fadeOutFrames) {
              return interpolate(f, [SCENE_FRAMES.scene3 - fadeOutFrames, SCENE_FRAMES.scene3], [1, 0], { extrapolateLeft: "clamp" });
            }
            return 1;
          }}
        />
      </Sequence>

      {/* シーン4: 特徴・機能紹介 - narration4.wav (1124〜1390フレーム) */}
      <Sequence from={scene4Start} durationInFrames={SCENE_FRAMES.scene4}>
        <Audio
          src={staticFile("narration4.wav")}
          volume={(f) => {
            // 短いフェードイン
            if (f < fadeInFrames) {
              return interpolate(f, [0, fadeInFrames], [0, 1], { extrapolateRight: "clamp" });
            }
            // 短いフェードアウト
            if (f > SCENE_FRAMES.scene4 - fadeOutFrames) {
              return interpolate(f, [SCENE_FRAMES.scene4 - fadeOutFrames, SCENE_FRAMES.scene4], [1, 0], { extrapolateLeft: "clamp" });
            }
            return 1;
          }}
        />
      </Sequence>

      {/* シーン5: エンディング - narration5.wav (1390〜1613フレーム) */}
      <Sequence from={scene5Start} durationInFrames={SCENE_FRAMES.scene5}>
        <Audio
          src={staticFile("narration5.wav")}
          volume={(f) => {
            // 短いフェードイン
            if (f < fadeInFrames) {
              return interpolate(f, [0, fadeInFrames], [0, 1], { extrapolateRight: "clamp" });
            }
            // 短いフェードアウト
            if (f > SCENE_FRAMES.scene5 - fadeOutFrames) {
              return interpolate(f, [SCENE_FRAMES.scene5 - fadeOutFrames, SCENE_FRAMES.scene5], [1, 0], { extrapolateLeft: "clamp" });
            }
            return 1;
          }}
        />
      </Sequence>
    </>
  );
};

export const TTSIntroVideo = () => {
  return (
    <AbsoluteFill>
      {/* オーディオトラック */}
      <AudioTrack />

      {/* シーン1: 導入 */}
      <Sequence durationInFrames={SCENE_FRAMES.scene1}>
        <Scene1Intro />
      </Sequence>

      {/* シーン2: インストール方法 */}
      <Sequence from={SCENE_FRAMES.scene1} durationInFrames={SCENE_FRAMES.scene2}>
        <Scene2Install />
      </Sequence>

      {/* シーン3: 使用方法とワークフロー */}
      <Sequence
        from={SCENE_FRAMES.scene1 + SCENE_FRAMES.scene2}
        durationInFrames={SCENE_FRAMES.scene3}
      >
        <Scene3Workflow />
      </Sequence>

      {/* シーン4: 特徴・機能紹介 */}
      <Sequence
        from={SCENE_FRAMES.scene1 + SCENE_FRAMES.scene2 + SCENE_FRAMES.scene3}
        durationInFrames={SCENE_FRAMES.scene4}
      >
        <Scene4Features />
      </Sequence>

      {/* シーン5: エンディング */}
      <Sequence
        from={SCENE_FRAMES.scene1 + SCENE_FRAMES.scene2 + SCENE_FRAMES.scene3 + SCENE_FRAMES.scene4}
        durationInFrames={SCENE_FRAMES.scene5}
      >
        <Scene5Ending />
      </Sequence>
    </AbsoluteFill>
  );
};

export const MyComposition = TTSIntroVideo;
