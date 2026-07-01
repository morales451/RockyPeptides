import { REFERRERS } from "@/lib/forms";

/**
 * "Referred by" dropdown used across every lead-capture form so we can route
 * a new lead to whoever referred them. Defaults to "None".
 */
export default function ReferredBySelect({
  id,
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <select
      id={id}
      name="referred_by"
      defaultValue="none"
      className={className}
    >
      <option value="" disabled>
        Referred by
      </option>
      {REFERRERS.map((r) => (
        <option key={r.value} value={r.value}>
          {r.label}
        </option>
      ))}
    </select>
  );
}
