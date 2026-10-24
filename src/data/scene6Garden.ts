/**
 * Flower planting spots that spell "AYA & ABDO" (LTR English letter art).
 * Coordinates are percent of the garden: left 0–100, bottom 0–100.
 */

type Cell = readonly [col: number, row: number]

/** 5×7 bitmap glyphs — row 0 is the top of the letter. */
const GLYPHS: Record<string, readonly Cell[]> = {
  A: [
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [4, 1],
    [0, 2],
    [4, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [0, 4],
    [4, 4],
    [0, 5],
    [4, 5],
    [0, 6],
    [4, 6],
  ],
  Y: [
    [0, 0],
    [4, 0],
    [0, 1],
    [4, 1],
    [1, 2],
    [3, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  B: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [4, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [0, 3],
    [4, 3],
    [0, 4],
    [4, 4],
    [0, 5],
    [4, 5],
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
  ],
  D: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [4, 1],
    [0, 2],
    [4, 2],
    [0, 3],
    [4, 3],
    [0, 4],
    [4, 4],
    [0, 5],
    [4, 5],
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
  ],
  O: [
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [4, 1],
    [0, 2],
    [4, 2],
    [0, 3],
    [4, 3],
    [0, 4],
    [4, 4],
    [0, 5],
    [4, 5],
    [1, 6],
    [2, 6],
    [3, 6],
  ],
  '&': [
    [2, 0],
    [1, 1],
    [3, 1],
    [1, 2],
    [2, 2],
    [0, 3],
    [2, 3],
    [3, 3],
    [0, 4],
    [3, 4],
    [1, 5],
    [2, 5],
    [4, 5],
    [1, 6],
    [2, 6],
    [3, 6],
  ],
}

const GLYPH_WIDTH = 5
const GLYPH_HEIGHT = 7
const LETTER_GAP = 1

/** Two-line layout: AYA on top, & ABDO below — fits the garden aspect. */
const LAYOUT_LINES = ['AYA', '& ABDO'] as const

function buildLetterPoints(): ReadonlyArray<{ left: number; bottom: number }> {
  const cells: { gx: number; gy: number }[] = []
  let maxGx = 0
  let maxGy = 0

  LAYOUT_LINES.forEach((line, lineIndex) => {
    let cursor = 0
    const rowOffset = lineIndex * (GLYPH_HEIGHT + 2)

    for (const ch of line) {
      if (ch === ' ') {
        cursor += 2
        continue
      }
      const glyph = GLYPHS[ch]
      if (!glyph) continue
      for (const [col, row] of glyph) {
        const gx = cursor + col
        const gy = rowOffset + row
        cells.push({ gx, gy })
        maxGx = Math.max(maxGx, gx)
        maxGy = Math.max(maxGy, gy)
      }
      cursor += GLYPH_WIDTH + LETTER_GAP
    }
  })

  // Pad so letters sit comfortably inside the garden.
  const padX = 4
  const padY = 10
  const usableW = 100 - padX * 2
  const usableH = 100 - padY * 2

  return cells.map(({ gx, gy }) => ({
    left: padX + (gx / Math.max(maxGx, 1)) * usableW,
    // Bitmap row 0 is top → higher bottom% in the garden.
    bottom: padY + ((maxGy - gy) / Math.max(maxGy, 1)) * usableH,
  }))
}

/** Ordered planting path that draws the names. */
export const scene6LetterPoints = buildLetterPoints()
