import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

// Custom components for enhanced MDX content
function CustomHeading({
	level,
	children,
	...props
}: {
	level: 1 | 2 | 3 | 4 | 5 | 6
	children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>) {
	const baseClasses = 'font-bold text-gray-900 tracking-tight'

	const sizeClasses = {
		1: 'text-4xl md:text-5xl mb-8 border-b border-gray-200 pb-4',
		2: 'text-3xl md:text-4xl mb-6 mt-12',
		3: 'text-2xl md:text-3xl mb-4 mt-8',
		4: 'text-xl md:text-2xl mb-4 mt-6',
		5: 'text-lg md:text-xl mb-3 mt-4',
		6: 'text-base md:text-lg mb-3 mt-4',
	}

	const className = `${baseClasses} ${sizeClasses[level]}`

	if (level === 1)
		return (
			<h1 className={className} {...props}>
				{children}
			</h1>
		)
	if (level === 2)
		return (
			<h2 className={className} {...props}>
				{children}
			</h2>
		)
	if (level === 3)
		return (
			<h3 className={className} {...props}>
				{children}
			</h3>
		)
	if (level === 4)
		return (
			<h4 className={className} {...props}>
				{children}
			</h4>
		)
	if (level === 5)
		return (
			<h5 className={className} {...props}>
				{children}
			</h5>
		)
	return (
		<h6 className={className} {...props}>
			{children}
		</h6>
	)
}

function CustomParagraph({
	children,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props}>
			{children}
		</p>
	)
}

function CustomList({
	children,
	ordered = false,
	...props
}: {
	children: React.ReactNode
	ordered?: boolean
} & React.HTMLAttributes<HTMLUListElement | HTMLOListElement>) {
	const Tag = ordered ? 'ol' : 'ul'
	const listClass = ordered
		? 'list-decimal list-inside space-y-2 mb-6 text-gray-700'
		: 'list-disc list-inside space-y-2 mb-6 text-gray-700'

	return (
		<Tag className={listClass} {...props}>
			{children}
		</Tag>
	)
}

function CustomListItem({
	children,
	...props
}: React.HTMLAttributes<HTMLLIElement>) {
	return (
		<li className="ml-4 leading-relaxed" {...props}>
			{children}
		</li>
	)
}

function CustomBlockquote({
	children,
	...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
	return (
		<blockquote
			className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50 rounded-r-lg italic text-gray-700"
			{...props}
		>
			{children}
		</blockquote>
	)
}

function CustomCode({
	children,
	className,
	...props
}: {
	children: React.ReactNode
	className?: string
} & React.HTMLAttributes<HTMLElement>) {
	const isInline = !className

	if (isInline) {
		return (
			<code
				className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono"
				{...props}
			>
				{children}
			</code>
		)
	}

	return (
		<pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6 shadow-lg">
			<code className="text-sm font-mono" {...props}>
				{children}
			</code>
		</pre>
	)
}

function CustomLink({
	href,
	children,
	...props
}: {
	href?: string
	children: React.ReactNode
} & React.HTMLAttributes<HTMLAnchorElement>) {
	const isExternal = href?.startsWith('http')

	if (isExternal) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
				{...props}
			>
				{children}
			</a>
		)
	}

	return (
		<Link
			href={href || '#'}
			className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
			{...props}
		>
			{children}
		</Link>
	)
}

function CustomTable({
	children,
	...props
}: React.HTMLAttributes<HTMLTableElement>) {
	return (
		<div className="overflow-x-auto mb-6">
			<table
				className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"
				{...props}
			>
				{children}
			</table>
		</div>
	)
}

function CustomTableHeader({
	children,
	...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<thead className="bg-gray-50" {...props}>
			{children}
		</thead>
	)
}

function CustomTableCell({
	children,
	...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<td className="px-6 py-4 border-b border-gray-200 text-gray-700" {...props}>
			{children}
		</td>
	)
}

function CustomTableHeaderCell({
	children,
	...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<th
			className="px-6 py-4 border-b border-gray-200 text-left font-semibold text-gray-900"
			{...props}
		>
			{children}
		</th>
	)
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Enhanced image component
		img: (props) => (
			<span className="my-8 rounded-xl overflow-hidden shadow-lg">
				<Image
					className="w-full h-auto"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
					width={800}
					height={600}
					{...(props as ImageProps)}
					alt={props.alt || ''}
				/>
			</span>
		),

		// Typography components
		h1: (props) => <CustomHeading level={1} {...props} />,
		h2: (props) => <CustomHeading level={2} {...props} />,
		h3: (props) => <CustomHeading level={3} {...props} />,
		h4: (props) => <CustomHeading level={4} {...props} />,
		h5: (props) => <CustomHeading level={5} {...props} />,
		h6: (props) => <CustomHeading level={6} {...props} />,

		p: CustomParagraph,

		// Lists
		ul: (props) => <CustomList {...props} />,
		ol: (props) => <CustomList ordered={true} {...props} />,
		li: CustomListItem,

		// Other elements
		blockquote: CustomBlockquote,
		code: CustomCode,
		pre: (props) => <div {...props} />, // Let CustomCode handle pre styling
		a: CustomLink,

		// Table components
		table: CustomTable,
		thead: CustomTableHeader,
		td: CustomTableCell,
		th: CustomTableHeaderCell,

		// Custom wrapper for strong/bold text
		strong: ({ children, ...props }) => (
			<strong className="font-bold text-gray-900" {...props}>
				{children}
			</strong>
		),

		// Custom wrapper for emphasis/italic text
		em: ({ children, ...props }) => (
			<em className="italic text-gray-700" {...props}>
				{children}
			</em>
		),

		// Horizontal rule
		hr: (props) => <hr className="my-8 border-gray-300" {...props} />,

		...components,
	}
}
