import {Dispatch, SetStateAction} from "react";

export type InputTypes = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  placeholder: string
  className?: string
  wrapperClassName?: string
}