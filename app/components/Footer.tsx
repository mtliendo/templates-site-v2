import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12 mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
							Templates Hub
						</h3>
						<p className="text-gray-400 mb-4">
							Beautiful, modern templates and resources for developers. Build
							faster with our curated collection.
						</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/templates"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Templates
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-gray-400 hover:text-white transition-colors"
								>
									About
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Connect</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Discord
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2025 Templates Hub. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
