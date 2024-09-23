
type SkillButtonProps = {
    title: string;
  };

export const SkillButton: React.FC<SkillButtonProps> = ({ title }) => {
    return (
    <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">{title}</div>
    );
      
}