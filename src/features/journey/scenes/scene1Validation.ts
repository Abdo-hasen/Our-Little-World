/**
 * Normalizes Eastern Arabic (Hindi) numerals (٠-٩) to standard ASCII digits (0-9).
 */
export function normalizeDigits(value: string): string {
  const easternArabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return value.replace(/[٠-٩]/g, (ch) => String(easternArabicDigits.indexOf(ch)))
}

/**
 * Validates whether the entered day, month, and year match the engagement date (13/03/2026).
 */
export function isEngagementDateValid(
  dayInput: string,
  monthInput: string,
  yearInput: string
): boolean {
  const cleanDay = normalizeDigits(dayInput.trim())
  const cleanMonth = normalizeDigits(monthInput.trim())
  const cleanYear = normalizeDigits(yearInput.trim())

  const day = Number.parseInt(cleanDay, 10)
  const month = Number.parseInt(cleanMonth, 10)
  const year = Number.parseInt(cleanYear, 10)

  return day === 13 && month === 3 && year === 2026
}
