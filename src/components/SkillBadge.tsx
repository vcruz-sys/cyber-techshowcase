import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

const SkillBadge = ({ skill, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "bg-primary/10 text-primary border border-primary/20",
        "hover:bg-primary/20 hover:border-primary/40 transition-all duration-300",
        className
      )}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
