import { FormEvent } from "react";

export function dateMask(event: FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 7;
  let value = event.currentTarget.value;

  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/, "$1/$2")

  event.currentTarget.value = value;
}
