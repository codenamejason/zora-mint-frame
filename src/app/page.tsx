import { FRAME_METADATA, SITE_URL } from '@/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: 'Fund Public Goods',
  other: FRAME_METADATA,
}

export default function Home() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex' }}>
      <h1 style={{ margin: 'auto' }}>Fund Public Goods 🌱</h1>
    </div>
  )
}
