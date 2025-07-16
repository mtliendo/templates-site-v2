export interface TagConfig {
	id: string
	label: string
	color: string
	description?: string
}

export const SUPPORTED_TAGS: TagConfig[] = [
	{
		id: 'ts',
		label: 'TypeScript',
		color: 'bg-blue-100 text-blue-800',
		description: 'Built with TypeScript',
	},
	{
		id: 'dev-edition',
		label: 'Dev Edition',
		color: 'bg-purple-100 text-purple-800',
		description: 'Developer focused templates',
	},
	{
		id: 'beginner',
		label: 'Beginner',
		color: 'bg-green-100 text-green-800',
		description: 'Perfect for beginners',
	},
	{
		id: 'fullstack',
		label: 'Full Stack',
		color: 'bg-orange-100 text-orange-800',
		description: 'Complete full-stack solutions',
	},
	{
		id: 'open-source',
		label: 'Open Source',
		color: 'bg-gray-100 text-gray-800',
		description: 'Open source projects',
	},
	{
		id: 'ai',
		label: 'AI/ML',
		color: 'bg-pink-100 text-pink-800',
		description: 'AI and Machine Learning templates',
	},
]

export const getTagConfig = (tagId: string): TagConfig | undefined => {
	return SUPPORTED_TAGS.find((tag) => tag.id === tagId)
}

export const getAllTags = (): TagConfig[] => {
	return SUPPORTED_TAGS
}
