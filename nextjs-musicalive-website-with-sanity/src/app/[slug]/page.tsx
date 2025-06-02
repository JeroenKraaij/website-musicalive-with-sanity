import { draftMode } from 'next/headers';
import { sanityClient } from '@/lib/sanity/client';
import { previewClient } from '@/lib/sanity/previewClient';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// 🧠 Decide which client to use based on draft mode
export default async function Page({ params }: { params: { slug: string } }) {
    const { isEnabled } = await draftMode();
    const client = isEnabled ? previewClient : sanityClient;

    const page = await client.fetch(
        `*[_type == "page" && slug.current == $slug][0]`,
        { slug: params.slug }
    );

    if (!page) notFound();

    return (
        <main className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
            <div className="prose dark:prose-invert">
                <PortableText value={page.content} />
            </div>
        </main>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { isEnabled } = await draftMode();
    const client = isEnabled ? previewClient : sanityClient;

    const page = await client.fetch(
        `*[_type == "page" && slug.current == $slug][0]`,
        { slug: params.slug }
    );

    if (!page) notFound();

    return {
        title: page.seoTitle || page.title || 'Page',
        description: page.seoDescription || 'Default description',
    };
}

export async function generateStaticParams() {
    const slugs: string[] = await sanityClient.fetch(
        `*[_type == "page" && defined(slug.current)][].slug.current`
    );
    return slugs
        .filter(slug => slug !== 'home')
        .map(slug => ({ slug }));
}