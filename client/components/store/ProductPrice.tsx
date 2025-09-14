export default function ProductPrice({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  return (
    <span className={`font-semibold ${className}`}>
      Rp {value.toLocaleString("id-ID")}
    </span>
  );
}
