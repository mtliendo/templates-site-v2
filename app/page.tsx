import React from 'react'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import { SUPPORTED_TAGS, getTagConfig, type TagConfig } from '@/config/tags'
import TemplatesSection from './components/TemplatesSection'

interface TemplateMetadata {
	title: string
	description: string
	date?: string
	slug: string
	coverImage?: string
	tags?: string[]
}

const getBlogPostsData = async () => {
	const dirs = fs.readdirSync(path.join(process.cwd(), 'content'))

	const mdxFiles = await Promise.all(
		dirs.map(async (dir) => {
			const { metadata } = await import(`@/content/${dir}/index.mdx`)

			return metadata
		})
	)

	return mdxFiles
}

function HeroSection() {
	return (
		<section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-24 overflow-hidden">
			{/* Background decorations */}
			<div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern opacity-20"></div>
			<div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
					Beautiful Templates
					<span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
						Made Simple
					</span>
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
					Discover our curated collection of stunning templates and resources.
					Built for developers, designed for success.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="#templates"
						className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
					>
						Explore Templates
					</Link>
					<Link
						href="/about"
						className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
					>
						Learn More
					</Link>
				</div>
			</div>
		</section>
	)
}

async function page() {
	const mdxFilesMetadata = await getBlogPostsData()

	return (
		<div className="min-h-screen">
			<HeroSection />

			{/* Templates Section */}
			<TemplatesSection templates={mdxFilesMetadata} />

			{/* Features Section */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Why Choose Our Templates?
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Lightning Fast
							</h3>
							<p className="text-gray-600">
								Optimized for performance and speed, get your projects running
								in minutes.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-purple-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Modern Design
							</h3>
							<p className="text-gray-600">
								Beautiful, responsive designs that work perfectly on all
								devices.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-green-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Production Ready
							</h3>
							<p className="text-gray-600">
								Battle-tested templates ready for production deployment.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page
