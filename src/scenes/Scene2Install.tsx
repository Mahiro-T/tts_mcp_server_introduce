import {
  interpolate,
  useCurrentFrame,
  AbsoluteFill,
} from "remotion";

export const Scene2Install = () => {
  const frame = useCurrentFrame();
  const totalFrames = 285; // シーン2の合計フレーム数

  // フェードイン/フェードアウトアニメーション
  const opacity = interpolate(frame, [0, 30, totalFrames - 30, totalFrames], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // コードブロックのスライドイン
  const slideX = interpolate(frame, [0, 45], [100, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#1e293b", opacity }}>
      <div className="flex h-full flex-col items-center justify-center px-20">
        <div
          className="w-full max-w-4xl"
          style={{ transform: `translateX(${slideX}px)` }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            インストール方法
          </h2>
          <p className="text-2xl text-gray-300 mb-8 text-center">
            以下のコマンドを実行してサーバーを起動
          </p>

          <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400 text-sm ml-2">terminal</span>
            </div>
            <div className="p-6 font-mono text-lg">
              <p className="text-green-400 mb-2">
                <span className="text-blue-400">$</span> uv pip install .
              </p>
              <p className="text-green-400">
                <span className="text-blue-400">$</span> uv run tts-server
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-green-500/20 border border-green-500/50 rounded-lg px-8 py-4">
              <p className="text-2xl text-green-300">
                🚀 サーバーはポート <span className="font-bold text-white">8000</span> で動作します
              </p>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
