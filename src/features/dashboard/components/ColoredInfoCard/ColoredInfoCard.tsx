import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

type Props = {
  title: string;
  value: string | number;
  bgColor?: string;
  iconColor?: string;
  icon?: React.ReactNode;
};

const ColoredInfoCard = ({
  title,
  value,
  bgColor = "bg-blue-300",
  iconColor = "text-blue-700",
  icon = <Info />,
}: Props) => {
  return (
    <div className={`p-4 rounded-lg shadow flex items-center gap-4 ${bgColor}`}>
      {icon && <div className={cn(`text-2xl`, `${iconColor}`)}>{icon}</div>}
      <div className="flex sm:flex-col flex-row">
        <div className="flex">
          <h3 className="text-sky-950 text-sm font-normal">{title}</h3>
        </div>
        <div className="flex mr-auto">
          <p className="text-sky-950 text-xl font-bold w-5 sm:mr-0 sm:py-1 sm:w-auto pr-10 sm:pr-0 text-left">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColoredInfoCard;
