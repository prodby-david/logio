import type { TimeLog } from "../types/hero.types";

export default function HeroMockup() {
  const isClockedIn = false;
  const progressHours = 182.5;

  const logs: TimeLog[] = [
    {
      id: "log-1",
      date: "May 28, 2026",
      task: "Assisted in API Integration and CORS setup",
      hours: 8.0,
      status: "approved",
    },
    {
      id: "log-2",
      date: "May 27, 2026",
      task: "Designed and implemented new register page UI",
      hours: 8.5,
      status: "approved",
    },
    {
      id: "log-3",
      date: "May 26, 2026",
      task: "Configured RouteServiceProvider and AppServiceProvider",
      hours: 8.0,
      status: "pending",
    },
    {
      id: "log-4",
      date: "May 25, 2026",
      task: "Created database migrations and user table schema",
      hours: 8.0,
      status: "approved",
    },
  ];

  const targetHours = 300;
  const progressPercent = Math.min((progressHours / targetHours) * 100, 100);

  return (
    <div className="w-full rounded-2xl bg-background-card border border-border-card shadow-2xl relative overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-3 bg-background-main/30 border-b border-border-card">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        </div>
        <div className="text-sm font-semibold text-text-placeholder">
          logio.com
        </div>
        <div className="w-12"></div>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-background-card/40 backdrop-blur-xl">
        <div className="md:col-span-5 flex flex-col gap-5">
          <div className="p-5 rounded-xl bg-background-input/40 border border-border-input/40 flex flex-col items-center justify-center relative overflow-hidden text-center">
            <span className="absolute top-3 left-3 flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isClockedIn ? "bg-accent-emerald" : "bg-red-400"}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${isClockedIn ? "bg-accent-emerald" : "bg-red-500"}`}
              ></span>
            </span>

            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              {isClockedIn ? "Active OJT Session" : "Session Paused"}
            </span>

            <span className="text-3xl sm:text-4xl font-extrabold text-text-primary font-mono tracking-tight my-4">
              04:32:18
            </span>

            <button className="w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-accent-indigo to-accent-emerald text-text-primary shadow-lg shadow-accent-indigo/25">
              Clock In Session
            </button>
          </div>

          <div className="p-5 rounded-xl bg-background-input/40 border border-border-input/40 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              OJT Hours Milestone
            </span>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-2xl font-bold text-text-primary">
                {progressHours}h
              </span>
              <span className="text-xs font-semibold text-text-placeholder">
                of {targetHours}h target
              </span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-background-card/50 overflow-hidden relative border border-border-card">
              <div
                className="h-full bg-gradient-to-r from-accent-indigo to-accent-emerald transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center mt-3 text-[10px] sm:text-xs font-medium text-text-muted">
              <span>{progressPercent.toFixed(1)}% Completed</span>
              <span className="text-accent-emerald">
                {(targetHours - progressHours).toFixed(1)}h Left
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Recent Time Logs
            </span>
            <span className="text-[10px] text-accent-indigo font-bold uppercase tracking-widest cursor-pointer hover:underline">
              View All Logs
            </span>
          </div>

          <div className="flex flex-col gap-3 max-h-[295px] overflow-y-auto pr-1">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-xl bg-background-input/30 border border-border-input/20 flex items-center justify-between gap-4 hover:border-border-input/50 transition-all duration-300"
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-text-primary truncate">
                    {log.task}
                  </span>
                  <span className="text-[10px] text-text-placeholder mt-0.5">
                    {log.date}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-bold text-text-primary bg-background-card/50 px-2 py-1 border border-border-card rounded-md">
                    {log.hours.toFixed(1)}h
                  </span>

                  <span
                    className={`text-[9px] uppercase font-bold tracking-widest px-2 py-1 rounded-md ${
                      log.status === "approved"
                        ? "bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald"
                        : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
