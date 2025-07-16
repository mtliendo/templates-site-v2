'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SUPPORTED_TAGS, getTagConfig, type TagConfig } from '@/config/tags'

interface TemplateMetadata {
	title: string
	description: string
	date?: string
	slug: string
	coverImage?: string
	tags?: string[]
}

function TagFilter({
	selectedTags,
	onTagToggle,
	availableTags,
}: {
	selectedTags: string[]
	onTagToggle: (tagId: string) => void
	availableTags: TagConfig[]
}) {
	return (
		<div className="mb-8">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Filter by Tags
			</h3>
			<div className="flex flex-wrap gap-2">
				{availableTags.map((tag) => {
					const isSelected = selectedTags.includes(tag.id)
					return (
						<button
							key={tag.id}
							onClick={() => onTagToggle(tag.id)}
							className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
								isSelected
									? 'bg-blue-600 text-white shadow-md'
									: `${tag.color} hover:shadow-md`
							}`}
							title={tag.description}
						>
							{tag.label}
						</button>
					)
				})}
			</div>
			{selectedTags.length > 0 && (
				<button
					onClick={() => selectedTags.forEach((tag) => onTagToggle(tag))}
					className="mt-3 text-sm text-gray-600 hover:text-gray-900 underline"
				>
					Clear all filters
				</button>
			)}
		</div>
	)
}

function TemplateCard({ template }: { template: TemplateMetadata }) {
	return (
		<Link href={`/templates/${template.slug}`} className="group">
			<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:scale-105">
				{template.coverImage && (
					<div className="relative h-48 overflow-hidden">
						<Image
							src={template.coverImage}
							alt={template.title}
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-300"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
					</div>
				)}
				<div className="p-6">
					<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
						{template.title}
					</h3>
					<p className="text-gray-600 mb-4 line-clamp-2">
						{template.description}
					</p>

					{/* Tags display */}
					{template.tags && template.tags.length > 0 && (
						<div className="flex flex-wrap gap-1 mb-4">
							{template.tags.map((tagId) => {
								const tagConfig = getTagConfig(tagId)
								if (!tagConfig) return null
								return (
									<span
										key={tagId}
										className={`px-2 py-1 rounded-full text-xs font-medium ${tagConfig.color}`}
									>
										{tagConfig.label}
									</span>
								)
							})}
						</div>
					)}

					<div className="flex items-center justify-between">
						<span className="text-sm text-gray-500">
							{template.date && new Date(template.date).toLocaleDateString()}
						</span>
						<div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
							<span className="text-sm font-medium">View Template</span>
							<svg
								className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default function TemplatesSection({
	templates,
}: {
	templates: TemplateMetadata[]
}) {
	const [selectedTags, setSelectedTags] = useState<string[]>([])

	// Get all unique tags from templates
	const availableTags = useMemo(() => {
		const usedTagIds = new Set<string>()
		templates.forEach((template) => {
			template.tags?.forEach((tag) => usedTagIds.add(tag))
		})

		return SUPPORTED_TAGS.filter((tag) => usedTagIds.has(tag.id))
	}, [templates])

	// Filter templates based on selected tags
	const filteredTemplates = useMemo(() => {
		if (selectedTags.length === 0) return templates

		return templates.filter((template) => {
			if (!template.tags) return false
			return selectedTags.every((selectedTag) =>
				template.tags!.includes(selectedTag)
			)
		})
	}, [templates, selectedTags])

	const handleTagToggle = (tagId: string) => {
		setSelectedTags((prev) =>
			prev.includes(tagId)
				? prev.filter((id) => id !== tagId)
				: [...prev, tagId]
		)
	}

	return (
		<section id="templates" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Featured Templates
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Carefully crafted templates to help you build amazing projects
						faster than ever before.
					</p>
				</div>

				{availableTags.length > 0 && (
					<TagFilter
						selectedTags={selectedTags}
						onTagToggle={handleTagToggle}
						availableTags={availableTags}
					/>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredTemplates.map((template) => (
						<TemplateCard key={template.slug} template={template} />
					))}
				</div>

				{filteredTemplates.length === 0 && templates.length > 0 && (
					<div className="text-center py-12">
						<div className="bg-gray-100 rounded-2xl p-12">
							<h3 className="text-2xl font-semibold text-gray-700 mb-4">
								No templates match your filters
							</h3>
							<p className="text-gray-500 mb-4">
								Try removing some filters to see more templates.
							</p>
							<button
								onClick={() => setSelectedTags([])}
								className="text-blue-600 hover:text-blue-700 font-medium underline"
							>
								Clear all filters
							</button>
						</div>
					</div>
				)}

				{templates.length === 0 && (
					<div className="text-center py-12">
						<div className="bg-gray-100 rounded-2xl p-12">
							<h3 className="text-2xl font-semibold text-gray-700 mb-4">
								No templates found
							</h3>
							<p className="text-gray-500">
								Check back soon for new templates!
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
