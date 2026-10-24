import './Scene2Placeholder.css'

interface Scene2PlaceholderProps {
  onBackToStart: () => void
}

export function Scene2Placeholder({ onBackToStart }: Scene2PlaceholderProps) {
  return (
    <section className="scene2-placeholder" aria-label="حكايتنا بالترتيب">
      <div className="scene2-placeholder__card">
        <div className="scene2-placeholder__badge">المشهد الثاني</div>
        <h2 className="scene2-placeholder__title">حكايتنا بالترتيب</h2>
        <p className="scene2-placeholder__message">
          تم تأكيد التاريخ بنجاح 🤍
          <br />
          المشهد الثاني قيد المراجعة والإعداد حسب تفاصيل القصة.
        </p>

        <div className="scene2-placeholder__actions">
          <button
            type="button"
            className="scene2-placeholder__btn"
            onClick={onBackToStart}
          >
            العودة للبداية
          </button>
        </div>
      </div>
    </section>
  )
}
