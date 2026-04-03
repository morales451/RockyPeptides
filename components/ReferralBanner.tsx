export default function ReferralBanner() {
  return (
    <div className="bg-warm-100 border-y border-warm-200 py-8">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-lg md:text-xl font-semibold text-sage-800">
          Love your results? Refer a friend — you both get{" "}
          <span className="text-ocean-500">$5 off</span> your next kit.
        </p>
        <p className="text-sm text-warm-800/60 mt-2">
          Just mention the referral when you or your friend places an order.
        </p>
      </div>
    </div>
  );
}
