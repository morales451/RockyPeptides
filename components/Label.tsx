import type { ReactNode } from "react";

/** A white facts label printed on the page's colour field. */
export function Label({
  children,
  className = "",
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "form";
  id?: string;
}) {
  return (
    <Tag id={id} className={`label ${className}`}>
      {children}
    </Tag>
  );
}

export function BarXL() {
  return <span aria-hidden="true" className="rule rule-xl" />;
}

export function BarMD() {
  return <span aria-hidden="true" className="rule rule-md" />;
}

/** One label row: name on the left, value on the right. */
export function Row({
  name,
  value,
  first = false,
  strong = false,
  className = "",
}: {
  name: ReactNode;
  value?: ReactNode;
  first?: boolean;
  strong?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`row ${first ? "row-first" : ""} flex items-baseline justify-between gap-4 ${className}`}
    >
      <span className={`condensed ${strong ? "font-extrabold" : ""}`}>{name}</span>
      {value !== undefined && (
        <span className="num text-right font-extrabold shrink-0">{value}</span>
      )}
    </div>
  );
}
