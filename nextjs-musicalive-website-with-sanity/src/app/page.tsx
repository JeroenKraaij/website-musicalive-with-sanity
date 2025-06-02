import { sanityClient } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// 🔹 Dynamic SEO from Sanity
export async function generateMetadata(): Promise<Metadata> {
    const page = await sanityClient.fetch(
        `*[_type == "page" && slug.current == "home-page"][0]`
    )

    if (!page) {
        notFound()
    }

    return {
        title: page.seoTitle || page.title || 'Home',
        description: page.seoDescription || 'Welcome to the site.',
    }
}

// 🔹 Homepage content from Sanity
export default async function HomePage() {
    const page = await sanityClient.fetch(
        `*[_type == "page" && slug.current == "home-page"][0]`
    )

    if (!page) {
        notFound()
    }

    return (
        <main className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
            <div className="prose dark:prose-invert">
                <PortableText value={page.content} />
            </div>
        </main>
    )
}
