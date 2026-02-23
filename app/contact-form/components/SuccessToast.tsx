import React from "react";
import { Check } from "lucide-react";

function SuccessToast() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // let it render once in the "hidden" state, then animate in
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`
        max-w-md w-full
        rounded-2xl
        px-6 py-5
        shadow-lg
        flex items-start gap-4
        transform transition-all duration-300 ease-out
        ${mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
      `}
      style={{
        background: "var(--contact-form-grey-900)",
        color: "var(--contact-form-green-200)",
      }}
    >
      <Check className="w-6 h-6 mt-1" />
      <div className="flex flex-col">
        <p className="font-bold text-lg">Message Sent!</p>
        <p className="text-sm opacity-90">
          Thanks for completing the form. We’ll be in touch soon!
        </p>
      </div>
    </div>
  );
}

export default SuccessToast