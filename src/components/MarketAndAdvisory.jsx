import { BarChart2, Camera, FileText, IndianRupee, TrendingUp } from "lucide-react";

export default function MarketAndAdvisory() {
  const lastMonths = [3500, 3700, 3400, 3600, 3900];
  return (
    <section className="mt-4">
      <div className="rounded-2xl p-4 space-y-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div>
          <h4 className="text-sm font-semibold" style={{ color: "#1f3a2e" }}>APMC Market Prices</h4>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <select className="rounded-xl border px-3 py-2 text-sm bg-white" style={{ borderColor: "#E9ECE9" }}>
              <option>Cotton</option>
              <option>Wheat</option>
              <option>Groundnut</option>
              <option>Cumin</option>
            </select>
            <select className="rounded-xl border px-3 py-2 text-sm bg-white" style={{ borderColor: "#E9ECE9" }}>
              <option>Rajkot</option>
              <option>Ahmedabad</option>
              <option>Surat</option>
            </select>
          </div>

          <div className="mt-3 rounded-xl p-3" style={{ backgroundColor: "#F4F5F2" }}>
            <div className="flex items-center justify-between text-xs" style={{ color: "#1f3a2e" }}>
              <span className="font-medium flex items-center gap-1"><BarChart2 className="h-4 w-4" /> Today's Prices</span>
              <span className="flex items-center gap-1 text-green-700"><TrendingUp className="h-4 w-4" /> +2.1%</span>
            </div>
            <div className="mt-2 grid grid-cols-3 text-center text-sm">
              <div>
                <p className="text-xs" style={{ color: "#4A5A4D" }}>Min</p>
                <p className="font-semibold flex items-center justify-center gap-1" style={{ color: "#1f3a2e" }}>
                  <IndianRupee className="h-4 w-4" /> 3,450
                </p>
              </div>
              <div>
                <p className="text-xs" style={{ color: "#4A5A4D" }}>Modal</p>
                <p className="font-semibold flex items-center justify-center gap-1" style={{ color: "#1f3a2e" }}>
                  <IndianRupee className="h-4 w-4" /> 3,720
                </p>
              </div>
              <div>
                <p className="text-xs" style={{ color: "#4A5A4D" }}>Max</p>
                <p className="font-semibold flex items-center justify-center gap-1" style={{ color: "#1f3a2e" }}>
                  <IndianRupee className="h-4 w-4" /> 3,980
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-1 items-end h-20">
              {lastMonths.map((p, i) => (
                <div key={i} className="rounded-t" style={{ height: `${(p - 3300) / 4}px`, backgroundColor: i % 2 ? "#7FAE83" : "#487B4B" }} />
              ))}
            </div>

            <div className="mt-3 rounded-xl p-3 flex items-center justify-between" style={{ backgroundColor: "#FFFFFF" }}>
              <div>
                <p className="text-xs" style={{ color: "#4A5A4D" }}>Predicted next month</p>
                <p className="text-sm font-semibold flex items-center gap-1" style={{ color: "#1f3a2e" }}>
                  <IndianRupee className="h-4 w-4" /> 3,880
                </p>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: "#E7F3EA", color: "#2F6B3A" }}>Stable</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold" style={{ color: "#1f3a2e" }}>Add Expense</h4>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <input type="date" className="rounded-xl border px-3 py-2 text-sm bg-white" style={{ borderColor: "#E9ECE9" }} />
            <select className="rounded-xl border px-3 py-2 text-sm bg-white" style={{ borderColor: "#E9ECE9" }}>
              <option>Seed</option>
              <option>Fertilizer</option>
              <option>Labor</option>
              <option>Irrigation</option>
              <option>Others</option>
            </select>
            <input type="number" placeholder="Amount" className="rounded-xl border px-3 py-2 text-sm col-span-2 bg-white placeholder:text-gray-400" style={{ borderColor: "#E9ECE9" }} />
            <input type="text" placeholder="Notes" className="rounded-xl border px-3 py-2 text-sm col-span-2 bg-white placeholder:text-gray-400" style={{ borderColor: "#E9ECE9" }} />
            <button className="col-span-2 inline-flex items-center gap-2 justify-center rounded-xl border px-3 py-2 text-sm font-medium"
                    style={{ borderColor: "#E9ECE9", backgroundColor: "#F4F5F2", color: "#1f3a2e" }}>
              <Camera className="h-4 w-4" /> Attach photo
            </button>
            <button className="col-span-2 rounded-xl py-2 text-sm font-medium" style={{ backgroundColor: "#487B4B", color: "#E7EAE7" }}>Save Expense</button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold" style={{ color: "#1f3a2e" }}>Advisory & Tips</h4>
          <div className="mt-3 grid gap-2">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl p-3 flex items-start gap-3" style={{ backgroundColor: "#F4F5F2" }}>
                <div className="h-10 w-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: "#E9ECE9" }}>🌱</div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold" style={{ color: "#1f3a2e" }}>Water management for Kharif crops</h5>
                  <p className="text-xs" style={{ color: "#4A5A4D" }}>Irrigate cotton fields early morning to reduce evaporation loss and improve yield.</p>
                </div>
                <FileText className="h-4 w-4" style={{ color: "#7FAE83" }} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
