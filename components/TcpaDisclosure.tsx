export default function TcpaDisclosure({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`text-xs leading-relaxed ${className}`}>
      By submitting, you agree to receive recurring marketing texts. Msg &amp;
      data rates may apply. Reply STOP to opt out.
    </p>
  );
}
