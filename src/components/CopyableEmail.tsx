import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = {
  email: string;
  className?: string;
};

/**
 * Inline email chip — clicking copies the address to the clipboard and
 * swaps the label to `Copied` for ~1.2s. Falls back to a mailto link if
 * clipboard access is denied.
 */
export default function CopyableEmail({ email, className }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`press inline-flex items-center gap-2 link-ink ${className ?? ""}`}
      aria-label={copied ? "Email copied" : `Copy email ${email}`}
    >
      <span className="mono text-sm">{email}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
      )}
      <span className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
