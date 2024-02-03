import { Dispatch, SetStateAction } from "react";

export interface IProps {
  interStatus: boolean;
  setInterStatus: Dispatch<SetStateAction<boolean>>;
}
