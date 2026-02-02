import {
  interpolate,
  useCurrentFrame,
  AbsoluteFill,
} from "remotion";

export const Scene5Ending = () => {
  const frame = useCurrentFrame();
  const totalFrames = 223; // シーン5の合計フレーム数

  // フェードイン/フェードアウトアニメーション
  const opacity = interpolate(frame, [0, 30, totalFrames - 30, totalFrames], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // URLのスケールアニメーション
  const scale = interpolate(frame, [45, totalFrames - 45], [0.95, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", opacity }}>
      <div className="flex h-full flex-col items-center justify-center px-16">
        <div
          className="text-center"
          style={{ transform: `scale(${scale})` }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">
            今すぐ始めましょう！
          </h2>

          <div className="bg-slate-800 rounded-xl border border-slate-600 p-8 mb-8 shadow-xl">
            <p className="text-xl text-gray-400 mb-2">GitHub リポジトリ</p>
            <p className="text-3xl text-blue-400 font-mono font-bold break-all">
              https://github.com/shoumatsuomahiro/tts-mcp-server
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg px-8 py-4 inline-block">
              <p className="text-2xl text-white font-bold">
                製作者: shoumatsuomahiro
              </p>
            </div>
            <div className="mt-6">
              <p className="text-xl text-gray-300">
                Powered by MLX Audio + Qwen3-TTS
              </p>
            </div>
          </div>

          <div className="mt-12 text-4xl">
            🎬 Thank you for watching!
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
