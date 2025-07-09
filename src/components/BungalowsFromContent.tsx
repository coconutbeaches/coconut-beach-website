'use client';

import React, { useEffect, useState } from 'react';
import { BungalowData } from '@/lib/content';

interface BungalowsFromContentProps {
  initialData?: BungalowData[];
}

const BungalowsFromContent: React.FC<BungalowsFromContentProps> = ({
  initialData = [],
}) => {
  const [bungalows, setBungalows] = useState<BungalowData[]>(initialData);
  const [loading, setLoading] = useState(!initialData.length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData.length > 0) return;

    const fetchBungalows = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/bungalows');
        if (!response.ok) {
          throw new Error('Failed to fetch bungalows');
        }
        const data = await response.json();
        setBungalows(data.bungalows || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBungalows();
  }, [initialData]);

  if (loading) return <div>Loading bungalows...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Bungalows from Content System</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {bungalows.map((bungalow) => (
          <div
            key={bungalow.id}
            style={{
              border: '1px solid #ddd',
              padding: '16px',
              borderRadius: '8px',
            }}
          >
            <h3>{bungalow.name}</h3>
            <p>{bungalow.description}</p>
            <div>
              <strong>Specifications:</strong>
              <ul>
                <li>Size: {bungalow.specs.size}</li>
                <li>Beds: {bungalow.specs.beds}</li>
                <li>Occupancy: {bungalow.specs.occupancy}</li>
                <li>Configuration: {bungalow.specs.bedConfiguration}</li>
              </ul>
            </div>
            <div>
              <strong>Features:</strong>
              <ul>
                {bungalow.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Price Range:</strong> {bungalow.priceRange.currency}{' '}
              {bungalow.priceRange.low} - {bungalow.priceRange.high} per{' '}
              {bungalow.priceRange.period}
            </div>
            <div>
              <strong>Category:</strong> {bungalow.category}
            </div>
            <div>
              <strong>Available:</strong> {bungalow.availability ? 'Yes' : 'No'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BungalowsFromContent;
