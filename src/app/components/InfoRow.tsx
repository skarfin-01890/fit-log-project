type InfoRowProps = {
  label: string;
  value: string | number;
};

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 last:border-b-0">
      <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
        {label}
      </span>

      <span className="text-sm font-semibold text-white">
        {value}
      </span>
    </div>
  );
};

export default InfoRow;