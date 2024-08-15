import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes using `twMerge` and `clsx`.
 *
 * @param {...(string|undefined)} inputs - The class names to merge.
 * @returns {string} The merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
