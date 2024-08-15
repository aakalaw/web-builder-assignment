"use client"

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * A wrapper component for the `NextThemesProvider` to manage theme-related state and provide context.
 *
 * @param {object} props - The props for the `ThemeProvider`.
 * @param {React.ReactNode} props.children - The child elements to render within the `ThemeProvider`.
 * @param {object} [props.theme] - Optional theme prop (if applicable).
 * @param {string} [props.defaultTheme] - Optional default theme to apply.
 * @param {string[]} [props.themes] - Optional array of theme names to use.
 * @returns {React.ReactElement} The rendered `ThemeProvider` component.
 */
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
