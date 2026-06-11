import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const flashcardsResponse = await payload.find({
    collection: 'flashcards',
    depth: 2,
    limit: 100,
  })
  const flashcards = flashcardsResponse.docs

  return (
    <div className="home-container">
      <header className="page-header">
        <h1 className="title">Flashcards Showcase</h1>
        <p className="subtitle">Hover/tap a card to reveal its answer</p>
      </header>

      <div className="flashcards-grid">
        {flashcards.map((card) => {
          const mainImage = card.mainImage
          const isMedia = mainImage && typeof mainImage === 'object' ? mainImage : null
          const fullImageUrl = isMedia ? isMedia.url : null
          const altText = isMedia ? isMedia.alt : 'Flashcard image'
          const category = card.category
          const isCategory = category && typeof category === 'object' ? category : null
          const categoryName = isCategory ? isCategory.name : null

          return (
            <div key={card.id} className="flashcard-wrapper">
              <div className="flashcard-inner">
                {/* Front Side */}
                <div className="flashcard-front">
                  {fullImageUrl ? (
                    <div className="flashcard-image-container">
                      <img src={fullImageUrl} alt={altText} className="flashcard-thumb" />
                    </div>
                  ) : (
                    <div className="flashcard-image-placeholder">
                      <span>No Image</span>
                    </div>
                  )}
                  <div className="flashcard-content">
                    {categoryName && <span className="flashcard-category">{categoryName}</span>}
                    {card.rank !== undefined && card.rank !== null && (
                      <span className="flashcard-rank">Rank: {card.rank}</span>
                    )}
                    <h3 className="flashcard-text">{card.front || 'Untitled'}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flashcard-back">
                  <div className="flashcard-content-back">
                    <span className="answer-label">Answer</span>
                    <p className="flashcard-text-back">{card.back || 'No answer provided'}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="footer">
        <div className="links">
          <a href="/admin" className="admin">Admin Dashboard</a>
        </div>
      </footer>
    </div>
  )
}
