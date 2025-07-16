export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<article className="bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="px-8 py-12 md:px-12 md:py-16">
						<div className="prose prose-lg max-w-none">{children}</div>
					</div>
				</article>
			</div>
		</div>
	)
}
