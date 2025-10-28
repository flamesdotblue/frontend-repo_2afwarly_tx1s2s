import { ChevronRight, Leaf, TrendingUp, Wallet } from "lucide-react";

export default function OnboardingSlides() {
  const slides = [
    {
      title: "Track Farm Expenses Easily",
      desc: "Record seeds, fertilizer, labor and more in a few taps.",
      icon: Wallet,
      accent: "#EAC645",
    },
    {
      title: "Check Crop Prices Anytime",
      desc: "Stay updated with mandi (APMC) rates across markets.",
      icon: TrendingUp,
      accent: "#7FAE83",
    },
    {
      title: "Grow Smarter with Cropay",
      desc: "Insights and advisories tailored for your crops.",
      icon: Leaf,
      accent: "#487B4B",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4">
        {slides.map((s, i) => (
          <article
            key={i}
            className="snap-center shrink-0 w-[85%] rounded-2xl p-5"
            style={{ backgroundColor: "#F4F5F2" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: s.accent, color: i === 0 ? "#1F2A1F" : "#0F1A12" }}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-base font-semibold" style={{ color: "#1f3a2e" }}>
                {s.title}
              </h3>
            </div>
            <p className="mt-3 text-sm" style={{ color: "#3B4A3E" }}>
              {s.desc}
            </p>
            <button
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "#487B4B" }}
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
