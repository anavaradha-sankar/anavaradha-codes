interface InfoCardProps {
  number: string;
  label: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ number, label }) => {
  return (
    <div className="bg-infoCardBg relative flex flex-col justify-between rounded-lg p-6 text-center text-secondaryTextColor shadow-md">
      <p className="absolute -top-20 left-16 z-10 text-[110px] font-bold text-secondaryAccent">
        {number}
      </p>
      <p className="mt-14 text-xl">{label}</p>
    </div>
  );
};
