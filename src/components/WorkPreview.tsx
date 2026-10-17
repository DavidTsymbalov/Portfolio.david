import { useState } from 'react'
import { useT } from '../context/LanguageContext'

const IMAGE_SRC = `${import.meta.env.BASE_URL}images/Programms.png`

export default function WorkPreview() {
  const t = useT()
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="work-preview-placeholder">
        <p>{t.work.previewPlaceholder}</p>
        <code>public/images/Programms.png</code>
      </div>
    )
  }

  return (
    <div className="work-preview">
      <img
        src={IMAGE_SRC}
        alt={t.work.previewAlt}
        className={`work-preview-img ${loaded ? 'is-visible' : ''}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {!loaded && <div className="work-preview-skeleton" />}
    </div>
  )
}
