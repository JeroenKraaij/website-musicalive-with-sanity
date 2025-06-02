import { sanityClient } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const page = await sanityClient.fetch(`*[_type == "page" && slug.current == "404"][0]`)
    return {
        title: page?.seoTitle || '404 – Page Not Found',
        description: page?.seoDescription || 'This page could not be found.',
    }
}

export default async function NotFound() {
    const page = await sanityClient.fetch(`*[_type == "page" && slug.current == "404"][0]`)
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="max-w-2xl text-center">
                <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {page?.title || 'Page Not Found'}
                </h2>
                <div className="prose dark:prose-invert mt-4">
                    <PortableText value={page?.content} />
                </div>
                <a href="/" className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                    Go back home
                </a>
            </div>
        </main>
    )
}