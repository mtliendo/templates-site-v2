//use packages like Node's fs module or globby to read a directory of posts and extract the metadata.

import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content')

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const { default: Post } = await import(`@/content/${slug}/index.mdx`)

	console.log('Post', Post)
	return <Post />
}

export function generateStaticParams() {
	const posts = fs.readdirSync(postsDirectory)
	return posts.map((post) => ({
		slug: post.replace(/\.mdx$/, ''),
	}))
}

export const dynamicParams = false
