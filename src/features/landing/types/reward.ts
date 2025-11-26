export interface RewardItem {
  rewardPointId: string;
  points: number;
  rewardName: string;
  discountCeiling: number;
  description: string;
  badges: any;
  urlImage: string;
  companyImage: any;
  deadlineDate: string;
  persianDeadlineDate: string;
  isActive: boolean;
  discountCode: any;
  usedDiscountCode: any[];
  isUsedPrize: boolean;
  urlSite?: string;
  isFree: boolean;
  isFestival: boolean;
}

export interface RewrdProps {
  open: boolean;
  onClose: () => void;
  item: RewardItem | null;
}
