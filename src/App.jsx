import { useEffect, useState } from "react";
import { Leaf, Moon, Sun } from "lucide-react";
import OnboardingSlides from "./components/OnboardingSlides";
import AuthCard from "./components/AuthCard";
import HomeDashboard from "./components/HomeDashboard";
import MarketAndAdvisory from "./components/MarketAndAdvisory";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: dark ? "#121212" : "#E7EAE7" }}>
      <header className="sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#487B4B" }}>
              <Leaf className="h-6 w-6" color="#E7EAE7" />
            </div>
            <div>
              <h1 className="text-xl font-semibold" style={{ color: dark ? "#E7EAE7" : "#1f3a2e" }}>Cropay</h1>
              <p className="text-xs" style={{ color: dark ? "#B4B8B4" : "#4A5A4D" }}>Smart farming. Simple finances.</p>
            </div>
          </div>
          <button
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium"
            style={{ backgroundColor: dark ? "#1E1E1E" : "#FFFFFF", color: dark ? "#E7EAE7" : "#1f3a2e", border: "1px solid #E9ECE9" }}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16">
        <div className="mx-auto w-full max-w-sm rounded-3xl shadow-xl overflow-hidden"
             style={{ backgroundColor: dark ? "#1E1E1E" : "#E9ECE9" }}>
          <div className="p-4">
            {/* Onboarding */}
            <OnboardingSlides />

            {/* Auth */}
            <AuthCard />

            {/* Dashboard */}
            <HomeDashboard />

            {/* Market Prices + Advisory + Expense form */}
            <MarketAndAdvisory />
          </div>
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: dark ? "#B4B8B4" : "#4A5A4D" }}>
          Palette · Primary #487B4B · Accent #EAC645 · Surface #FFFFFF · Background #E7EAE7
        </p>
      </main>
    </div>
  );
}
