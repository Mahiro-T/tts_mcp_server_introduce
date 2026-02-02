import {
  interpolate,
  useCurrentFrame,
  AbsoluteFill,
  spring,
} from "remotion";

const workflowSteps = [
  {
    step: 1,
    title: "generate_tts",
    description: "タスクを作成",
    code: "await client.generate_tts(text)",
  },
  {
    step: 2,
    title: "check_task",
    description: "進捗を確認",
    code: "await client.check_task(task_id)",
  },
  {
    step: 3,
    title: "完了",
    description: "音声パスを取得",
    code: "audio_path = result.audio_path",
  },
];

export const Scene3Workflow = () => {
  const frame = useCurrentFrame();
  const totalFrames = 268; // シーン3の合計フレーム数

  // フェードイン/フェードアウトアニメーション
  const opacity = interpolate(frame, [0, 30, totalFrames - 30, totalFrames], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", opacity }}>
      <div className="flex h-full flex-col items-center justify-center px-16">
        <h2 className="text-5xl font-bold text-white mb-12">
          使用方法とワークフロー
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {workflowSteps.map((step, index) => {
            const startFrame = 45 + index * 70;
            const scale = spring({
              frame: frame - startFrame,
              fps: 30,
              config: { damping: 15, stiffness: 100 },
              from: 0,
              to: 1,
            });
            const stepOpacity = interpolate(
              frame,
              [startFrame, startFrame + 30],
              [0, 1],
              { extrapolateRight: "clamp" }
            );

            return (
              <div
                key={step.step}
                className="bg-slate-800 rounded-xl border border-slate-600 p-6 shadow-xl"
                style={{
                  opacity: stepOpacity,
                  transform: `scale(${scale})`,
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-300 mb-4 text-center">
                  {step.description}
                </p>
                <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400">
                  {step.code}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg px-6 py-3">
            <p className="text-xl text-blue-300">
              ⚡ 非同期処理による高速な音声生成
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
