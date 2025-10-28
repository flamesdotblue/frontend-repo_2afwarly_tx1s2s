import { Phone, ShieldCheck, User } from "lucide-react";

export default function AuthCard() {
  return (
    <section className="mt-4">
      <div className="rounded-2xl p-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#E9ECE9" }}>
            <User className="h-5 w-5" style={{ color: "#487B4B" }} />
          </div>
          <div>
            <h4 className="text-sm font-semibold" style={{ color: "#1f3a2e" }}>Login / Signup</h4>
            <p className="text-xs" style={{ color: "#4A5A4D" }}>Use your phone number to continue</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-9">
            <div className="flex items-center gap-2 rounded-xl border px-3 py-2 bg-white"
                 style={{ borderColor: "#E9ECE9" }}>
              <Phone className="h-4 w-4" style={{ color: "#7FAE83" }} />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="col-span-3">
            <button className="w-full h-full rounded-xl text-sm font-medium" style={{ backgroundColor: "#487B4B", color: "#E7EAE7" }}>
              Get OTP
            </button>
          </div>
        </div>

        <button className="mt-3 w-full rounded-xl border py-2 text-sm font-medium"
                style={{ borderColor: "#E9ECE9", color: "#1f3a2e", backgroundColor: "#F4F5F2" }}>
          Continue with Google
        </button>

        <p className="mt-3 flex items-center gap-2 text-xs" style={{ color: "#4A5A4D" }}>
          <ShieldCheck className="h-4 w-4" /> Secure OTP, we never share your data
        </p>
      </div>
    </section>
  );
}
