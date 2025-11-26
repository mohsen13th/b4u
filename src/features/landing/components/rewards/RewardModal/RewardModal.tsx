"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { RewrdProps } from "@/features/landing/types/reward";

const RewardModal = ({ open, onClose, item }: RewrdProps) => {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md font-iransans transform transition-all duration-400
               scale-55 opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 mx-h-[75vh] sm:mx-h-[90vh]"
      >
        <DialogHeader >
          <DialogTitle className="font-iransans font-extrabold text-center text-sky-900">
            {item.rewardName}
            <div className="border-t w-full border-solid border-gray-300 my-4" />
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center content-start overflow-y-auto">
          <Image
            src={item.urlImage}
            width={200}
            height={200}
            alt={item.rewardName}
            className="rounded-xl mb-2 fixed-size-img"
          />
          <div className="border-t w-full border-solid border-gray-300 my-1.5" />
          <div className="flex flex-row w-full">
            <p className="text-base font-bold text-sky-900 text-right">
              سکه مورد نیاز:{" "}
            </p>
            <p className="text-base font-bold text-sky-900 text-right mr-1">
              {item.points}
            </p>
          </div>
          <div className="border-t w-full border-solid border-gray-300 my-1.5" />
          <p className="text-sm text-muted-foreground text-justify">
            {item.description}
          </p>
          <div className="border-t w-full border-solid border-gray-300 my-1.5" />
          <div className="flex mt-4 text-base font-bold text-amber-900">
            <p className="ml-1">تاریخ انقضا:</p>
            <p>{item.persianDeadlineDate}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardModal;
