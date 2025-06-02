
// components/PreviewBanner.tsx

'use client'

import Link from 'next/link'

export default function PreviewBanner() {
    return (
        <div className="fixed top-0 z-[9999] w-full bg-amber-500 text-black text-center py-2 text-sm font-medium">
            🔍 Preview Mode is ON —
            <Link href="/api/exit-preview" className="underline ml-2 hover:text-white transition">
                Exit Preview
            </Link>
        </div>
    )
}
