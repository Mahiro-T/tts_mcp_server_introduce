import {
  interpolate,
  useCurrentFrame,
  AbsoluteFill,
  Easing,
} from "remotion";

export const Scene1Intro = () => {
  const frame = useCurrentFrame();
  const totalFrames = 571; // シーン1の合計フレーム数

  // フェードイン/フェードアウトアニメーション（easing付き）
  const opacity = interpolate(frame, [0, 30, totalFrames - 30, totalFrames], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
    easing: Easing.ease,
  });

  // タイトルのY位置アニメーション（easeOut）
  const translateY = interpolate(frame, [0, 45], [50, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  const scale = interpolate(frame, [0, 45], [0.9, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  const contentOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.ease,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", opacity }}>
      <div
        className="flex h-full flex-col items-center justify-center text-center"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity: contentOpacity,
        }}
      >
        <h1 className="text-7xl font-bold text-white mb-6">
          TTS MCP Server
        </h1>
        <p className="text-4xl font-semibold text-blue-400 mb-8">
          高性能テキスト読み上げサーバー
        </p>
        <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg px-6 py-4">
          <p className="text-2xl text-blue-300">
            使用技術: <span className="font-bold text-white">MLX Audio</span> + <span className="font-bold text-white">Qwen3-TTS</span>モデル
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
