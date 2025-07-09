import fs from 'fs';
import path from 'path';
import { ImageKey } from './images';

// Types for bungalow data
export interface BungalowSpec {
  size: string;
  beds: string;
  occupancy: string;
  bedConfiguration: string;
}

export interface BungalowPriceRange {
  low: number;
  high: number;
  currency: string;
  period: string;
}

export interface BungalowData {
  id: string;
  name: string;
  imageKey: ImageKey;
  description: string;
  specs: BungalowSpec;
  features: string[];
  priceRange: BungalowPriceRange;
  availability: boolean;
  category: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
}

export interface BungalowsContent {
  bungalows: BungalowData[];
  metadata: {
    lastUpdated: string;
    version: string;
    totalBungalows: number;
    categories: string[];
    currency: string;
    checkInTime: string;
    checkOutTime: string;
  };
}

// Content management functions
export function getBungalowsData(): BungalowsContent {
  try {
    const contentPath = path.join(process.cwd(), 'src/content/bungalows.json');
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading bungalows data:', error);
    // Return fallback data if file doesn't exist
    return {
      bungalows: [],
      metadata: {
        lastUpdated: new Date().toISOString(),
        version: '1.0',
        totalBungalows: 0,
        categories: [],
        currency: 'THB',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
    };
  }
}

export function getBungalowById(id: string): BungalowData | undefined {
  const { bungalows } = getBungalowsData();
  return bungalows.find((bungalow) => bungalow.id === id);
}

export function getBungalowsByCategory(category: string): BungalowData[] {
  const { bungalows } = getBungalowsData();
  return bungalows.filter((bungalow) => bungalow.category === category);
}

export function getPoliciesContent(): string {
  try {
    const contentPath = path.join(process.cwd(), 'src/content/policies.md');
    return fs.readFileSync(contentPath, 'utf8');
  } catch (error) {
    console.error('Error loading policies content:', error);
    return '# Policies\n\nPolicies content not available.';
  }
}

// For client-side usage (when running in browser)
export function getBungalowsDataClient(): BungalowData[] {
  // This would typically fetch from an API endpoint
  // For now, return empty array as fallback
  return [];
}

// Helper function to format prices
export function formatPrice(price: number, currency: string = 'THB'): string {
  switch (currency) {
    case 'THB':
      return `฿${price.toLocaleString()}`;
    case 'USD':
      return `$${price.toLocaleString()}`;
    case 'EUR':
      return `€${price.toLocaleString()}`;
    default:
      return `${price.toLocaleString()} ${currency}`;
  }
}

// Helper function to check availability
export function isAvailable(bungalow: BungalowData): boolean {
  return bungalow.availability;
}

// Helper function to get available categories
export function getAvailableCategories(): string[] {
  const { metadata } = getBungalowsData();
  return metadata.categories;
}

// Export for backward compatibility with existing components
export { getBungalowsData as getBungalows };
