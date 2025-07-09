# Content Management System

This directory contains the content files for the Coconut Beach Bungalows website. The content is structured to be easily managed and future-ready for CMS integration.

## File Structure

```
src/content/
├── bungalows.json     # Bungalow data and specifications
├── policies.md        # Resort policies and guidelines
└── README.md         # This documentation file
```

## Content Files

### bungalows.json

Contains all bungalow data including:
- Basic information (id, name, description)
- Specifications (size, beds, occupancy)
- Features and amenities
- Pricing information
- Availability status
- Category classification

**Structure:**
```json
{
  "bungalows": [
    {
      "id": "unique-identifier",
      "name": "Display Name",
      "imageKey": "image-reference",
      "description": "Detailed description",
      "specs": {
        "size": "45 sqm",
        "beds": "2 beds",
        "occupancy": "4 guests",
        "bedConfiguration": "1 King bed, 1 Single bed"
      },
      "features": ["Feature 1", "Feature 2"],
      "priceRange": {
        "low": 1200,
        "high": 2000,
        "currency": "THB",
        "period": "night"
      },
      "availability": true,
      "category": "deluxe"
    }
  ],
  "metadata": {
    "lastUpdated": "2024-01-01T00:00:00Z",
    "version": "1.0",
    "totalBungalows": 6,
    "categories": ["standard", "deluxe", "premium", "family", "suite"],
    "currency": "THB",
    "checkInTime": "14:00",
    "checkOutTime": "12:00"
  }
}
```

### policies.md

Contains resort policies in markdown format:
- Check-in & Check-out procedures
- Cancellation policies
- Environmental guidelines
- Property rules
- Payment information
- Health & safety guidelines
- Amenities & services information

## API Endpoints

### GET /api/bungalows
- Returns all bungalows data
- Query parameters:
  - `id`: Get specific bungalow by ID
  - `category`: Filter by category

### GET /api/policies
- Returns policies content in markdown format

### POST /api/bookings
- Accepts booking requests
- Logs payload and returns confirmation

## Usage in Components

### Server Components (Server-side)
```typescript
import { getBungalowsData, getPoliciesContent } from '@/lib/content';

// Get all bungalows
const { bungalows, metadata } = getBungalowsData();

// Get policies
const policies = getPoliciesContent();
```

### Client Components (Client-side)
```typescript
// Fetch from API endpoints
const response = await fetch('/api/bungalows');
const data = await response.json();
```

## Content Management

### Updating Bungalow Data

1. Edit `bungalows.json` directly
2. Update the `lastUpdated` field in metadata
3. Increment version number if making breaking changes

### Updating Policies

1. Edit `policies.md` using markdown syntax
2. Update the last updated date at the bottom

## Future CMS Integration

This structure is designed to be easily migrated to a headless CMS like:

- **Contentful**: JSON structure maps well to Contentful content models
- **Strapi**: Can import JSON data directly
- **Sanity**: TypeScript interfaces can be converted to schemas
- **Contentlayer**: Already structured for Contentlayer integration

### Migration Steps

1. **Choose CMS**: Select appropriate headless CMS
2. **Create schemas**: Convert TypeScript interfaces to CMS schemas
3. **Import data**: Use JSON files to populate initial content
4. **Update API**: Modify API endpoints to fetch from CMS
5. **Update components**: Update import statements to use CMS SDK

## Content Validation

The TypeScript interfaces in `src/lib/content.ts` provide type safety:

- `BungalowData`: Complete bungalow information
- `BungalowSpec`: Specifications sub-object
- `BungalowPriceRange`: Pricing information
- `BungalowsContent`: Complete content structure

## Environment Variables

Related environment variables for CMS integration:
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_TOKEN`

## Best Practices

1. **Always validate data**: Use TypeScript interfaces
2. **Keep backups**: Version control is essential
3. **Test changes**: Verify API endpoints after updates
4. **Documentation**: Update this README when adding new content types
5. **Performance**: Consider caching strategies for production

## Troubleshooting

### Common Issues

1. **File not found**: Ensure file paths are correct
2. **JSON parsing errors**: Validate JSON syntax
3. **Type mismatches**: Check TypeScript interfaces
4. **API errors**: Check server logs for detailed error messages

### Debugging

- Check browser console for client-side errors
- Check server logs for API errors
- Use TypeScript compiler for type checking
- Test API endpoints directly in browser/Postman
