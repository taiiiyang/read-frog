export const MIN_SIDE_CONTENT_WIDTH = 400 // px
export const DEFAULT_SIDE_CONTENT_WIDTH = 400 // px

export const DOWNLOAD_FILE_ITEMS = {
  md: {
    label: 'Markdown',
  },
}

export const AST_TEMPLATE = `
# {{ title }}

{{ sentence }}
`

export const SENTENCE_TEMPLATE = `
## Sentence #{{ globalIndex }}

**#{{ originalSentence }}**

#{{ translatedSentence }}

### Key Words

#{{ words }}

### Explanation

#{{ explanation }}
`

export const WORDS_TEMPLATE = `
{{ wIndex }}. **{{ word }}** {{ syntacticCategory }}
  {{ explanation }}
`
