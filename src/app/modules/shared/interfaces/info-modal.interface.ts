import { ButtonTypeColorEnum } from "../enums/button-type.enum";

export interface InfoModalInterface {
  iconColor: string;
  iconPath: string;
  modalTitle: string;
  modalDescription: string;
  positiveButtonMessage?: string;
  negativeButtonMessage?: string;
  hasNegativeButton?: boolean;
  theme: ButtonTypeColorEnum;
}
