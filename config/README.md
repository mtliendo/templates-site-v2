# Tags Configuration

This directory contains the configuration for template tags used throughout the application.

## Adding New Tags

To add a new tag to the system:

1. Open `config/tags.ts`
2. Add a new entry to the `SUPPORTED_TAGS` array:

```typescript
{
  id: 'your-tag-id',           // Unique identifier (used in content files)
  label: 'Your Tag Name',      // Display name shown to users
  color: 'bg-color-100 text-color-800',  // Tailwind CSS classes for styling
  description: 'Tag description'  // Optional tooltip description
}
```

## Available Color Schemes

Here are some recommended Tailwind color combinations:

- Blue: `bg-blue-100 text-blue-800`
- Purple: `bg-purple-100 text-purple-800`
- Green: `bg-green-100 text-green-800`
- Orange: `bg-orange-100 text-orange-800`
- Pink: `bg-pink-100 text-pink-800`
- Gray: `bg-gray-100 text-gray-800`
- Red: `bg-red-100 text-red-800`
- Yellow: `bg-yellow-100 text-yellow-800`
- Indigo: `bg-indigo-100 text-indigo-800`
- Teal: `bg-teal-100 text-teal-800`

## Using Tags in Content

To use tags in your markdown content files, add them to the metadata:

```typescript
export const metadata = {
	title: 'Your Template',
	description: 'Template description',
	slug: 'template-slug',
	tags: ['your-tag-id', 'another-tag-id'], // Use the tag IDs defined in config/tags.ts
}
```

## Current Tags

As of the last update, the following tags are available:

- `ts` - TypeScript
- `dev-edition` - Dev Edition
- `beginner` - Beginner
- `fullstack` - Full Stack
- `open-source` - Open Source
- `ai` - AI/ML

## How Filtering Works

The filtering system:

1. Automatically detects which tags are actually used in your content
2. Only shows filter buttons for tags that exist in at least one template
3. Supports multi-tag filtering (AND logic - templates must have ALL selected tags)
4. Provides a "Clear all filters" option when filters are active
5. Shows appropriate messages when no templates match the selected filters
