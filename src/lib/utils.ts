import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatProviders(providers: string[]): string {
  if (providers.length === 0) return '';
  if (providers.length === 1) return providers[0];
  if (providers.length === 2) return `${providers[0]} and ${providers[1]}`;
  
  return `${providers.slice(0, -1).join(', ')}, and ${providers[providers.length - 1]}`;
}

export function generateSEOTitle(category: string): string {
  return `${category} Insurance Guide | InsureHub.ai`;
}

export function generateSEODescription(category: string, description: string): string {
  return `${description}. Compare top ${category.toLowerCase()} insurance providers and get quotes instantly. Expert guidance at InsureHub.ai.`;
}