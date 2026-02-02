import {
  interpolate,
  useCurrentFrame,
  AbsoluteFill,
} from "remotion";

const features = [
  { icon: "🌐", title: "多言語対応", languages: ["日本語", "英語", "中国語", "韓国語"] },
  { icon: "🎤", title: "9種類のボイス", count: 9 },
  { icon: "👤", title: "カスタムボイスクローニング", desc: "独自の声を作成可能" },
  { icon: "⚡", title: "非同期処理", desc: "高速な音声生成" },
];

export const Scene4Features = () => {
  const frame = useCurrentFrame();
  const totalFrames = 266; // シーン4の合計フレーム数

  // フェードイン/フェードアウトアニメーション
  const opacity = interpolate(frame, [0, 30, totalFrames - 30, totalFrames], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#1e293b", opacity }}>
      <div className="flex h-full flex-col items-center justify-center px-16">
        <h2 className="text-5xl font-bold text-white mb-12">
          特徴・機能
        </h2>

        <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
          {features.map((feature, index) => {
            const startFrame = 45 + index * 50;
            const slideY = interpolate(frame, [startFrame, startFrame + 40], [50, 0], {
              extrapolateRight: "clamp",
            });
            const featureOpacity = interpolate(frame, [startFrame, startFrame + 30], [0, 1], {
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={index}
                className="bg-slate-800 rounded-xl border border-slate-600 p-8 shadow-xl"
                style={{
                  opacity: featureOpacity,
                  transform: `translateY(${slideY}px)`,
                }}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                {feature.languages && (
                  <div className="flex flex-wrap gap-2">
                    {feature.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-lg"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
                {feature.count && (
                  <p className="text-2xl text-blue-400 font-bold">{feature.count}種類</p>
                )}
                {feature.desc && (
                  <p className="text-xl text-gray-300">{feature.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
