import { DEALERS } from "@/lib/forms";

/**
 * "Who is your dealer?" dropdown used across every lead-capture form so we can
 * route a lead to whichever dealer (Alex, Eric, or Luis) should take charge of
 * it. Defaults to "None" for brand-new leads with no dealer yet.
 */
export default function DealerSelect({
  id,
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <select id={id} name="dealer" defaultValue="none" className={className}>
      <option value="" disabled>
        Who is your dealer?
      </option>
      {DEALERS.map((d) => (
        <option key={d.value} value={d.value}>
          {d.label}
        </option>
      ))}
    </select>
  );
}
