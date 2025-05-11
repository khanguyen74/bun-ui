import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
