import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getInitials(name) {
  const parts = name.split(" ");
  const firstNameInitial = parts[0][0];
  if (parts.length === 1) {
    return firstNameInitial;
  }
  const lastNameInitial = parts[parts.length - 1][0];
  return firstNameInitial + lastNameInitial;
}
