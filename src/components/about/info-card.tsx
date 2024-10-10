interface InfoCardProps {
  number: string;
  label: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ number, label }) => {
  return (
    <div className="relative bg-white text-secondaryTextColor p-6 text-center rounded-lg shadow-md flex flex-col justify-between ">
      <p className="text-[110px] font-bold absolute left-16 -top-20 text-secondaryAccent z-10">
        {number}
      </p>
      <p className="text-xl mt-14">{label}</p>
    </div>
  );
};
