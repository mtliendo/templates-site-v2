'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link
						href="/"
						className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
					>
						Templates Hub
					</Link>
					<div className="hidden md:flex space-x-8">
						<Link
							href="/"
							className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							Home
						</Link>
						<Link
							href="/templates"
							className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							Templates
						</Link>
						<Link
							href="/about"
							className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							About
						</Link>
					</div>
					<div className="md:hidden">
						<button
							className="text-gray-700 hover:text-blue-600 transition-colors"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle mobile menu"
						>
							{isMobileMenuOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<Link
								href="/"
								className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/templates"
								className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Templates
							</Link>
							<Link
								href="/about"
								className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
