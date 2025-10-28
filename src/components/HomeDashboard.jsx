import { ArrowDownRight, ArrowUpRight, BarChart3, IndianRupee, Plus, Sprout, Wallet } from "lucide-react";

function SummaryCard({ label, amount, tone = "neutral", icon: Icon }) {
  const tones = {
    neutral: { bg: "#F4F5F2", fg: "#1f3a2e" },
    success: { bg: "#E7F3EA", fg: "#2F6B3A" },
    warning: { bg: "#FFF7E5", fg: "#7A5A16" },
  };
  const t = tones[tone];
  return (
    <div className="rounded-2xl p-4 flex-1" style={{ backgroundColor: t.bg }}>
      <div className="flex items-center justify-between">
        <span className="text-xs" style={{ color: t.fg }}>{label}</span>
        <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E9ECE9" }}>
          <Icon className="h-4 w-4" style={{ color: "#487B4B" }} />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <IndianRupee className="h-4 w-4" style={{ color: t.fg }} />
        <span className="text-lg font-semibold" style={{ color: t.fg }}>{amount}</span>
      </div>
    </div>
  );
}

function QuickAction({ label, icon: Icon }) {
  return (
    <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium"
            style={{ backgroundColor: "#487B4B", color: "#E7EAE7" }}>
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}

export default function HomeDashboard() {
  return (
    <section className="mt-4">
      <div className="rounded-2xl p-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs" style={{ color: "#4A5A4D" }}>Welcome back,</p>
            <h3 className="text-base font-semibold" style={{ color: "#1f3a2e" }}>Ravi Patel</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-xl px-3 py-2 text-xs font-medium" style={{ backgroundColor: "#F4F5F2", color: "#1f3a2e" }}>EN</button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <SummaryCard label="Expenses" amount="32,400" icon={Wallet} />
          <SummaryCard label="Income" amount="51,000" icon={BarChart3} tone="success" />
          <div className="rounded-2xl p-4" style={{ backgroundColor: "#F4F5F2" }}>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "#1f3a2e" }}>Net</span>
              <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E9ECE9" }}>
                <ArrowUpRight className="h-4 w-4" style={{ color: "#5AA66A" }} />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <IndianRupee className="h-4 w-4" style={{ color: "#1f3a2e" }} />
              <span className="text-lg font-semibold" style={{ color: "#1f3a2e" }}>18,600</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <QuickAction label="Add Expense" icon={ArrowDownRight} />
          <QuickAction label="Add Income" icon={ArrowUpRight} />
          <QuickAction label="View Crops" icon={Sprout} />
          <QuickAction label="Market Prices" icon={BarChart3} />
        </div>

        <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "#F4F5F2" }}>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold" style={{ color: "#1f3a2e" }}>Monthly Profit Trend</h4>
          </div>
          {/* Simple bar chart mock */}
          <div className="mt-3 grid grid-cols-12 gap-1 items-end h-24">
            {[10, 22, 15, 28, 20, 30, 26, 32, 24, 34, 29, 36].map((h, i) => (
              <div key={i} className="rounded-t" style={{ height: `${h * 2}px`, backgroundColor: i % 2 ? "#7FAE83" : "#487B4B" }} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-sm font-semibold mb-2" style={{ color: "#1f3a2e" }}>Your Crops</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Cotton", expense: 12400, income: 22000, emoji: "🧵" },
              { name: "Wheat", expense: 7800, income: 14500, emoji: "🌾" },
              { name: "Groundnut", expense: 5200, income: 9800, emoji: "🥜" },
              { name: "Cumin", expense: 4300, income: 7600, emoji: "🌿" },
            ].map((c) => {
              const net = c.income - c.expense;
              const positive = net >= 0;
              return (
                <div key={c.name} className="rounded-2xl p-3" style={{ backgroundColor: "#F4F5F2" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-base">{c.emoji}</span>
                    <span className={`text-xs font-medium ${positive ? "text-green-700" : "text-red-600"}`}>
                      {positive ? "+" : ""}{net}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold" style={{ color: "#1f3a2e" }}>{c.name}</p>
                  <p className="text-[11px]" style={{ color: "#4A5A4D" }}>Exp {c.expense} · Inc {c.income}</p>
                </div>
              );
            })}
          </div>
          <button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl py-2 text-sm font-medium"
                  style={{ backgroundColor: "#487B4B", color: "#E7EAE7" }}>
            <Plus className="h-4 w-4" /> Add New Crop
          </button>
        </div>
      </div>
    </section>
  );
}
