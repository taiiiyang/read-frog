import type { DOWNLOAD_FILE_TYPES } from './download'
import type { ArticleExplanation } from '@/types/content'

type Parser = (explainDataList: ArticleExplanation['paragraphs'], opts?: object) => string
type DOWNLOADER_MAP = Record<DOWNLOAD_FILE_TYPES, Parser>

export default class ASTParser {
  parse(explainDataList: ArticleExplanation['paragraphs'], type: DOWNLOAD_FILE_TYPES): string {
    const parserMap: DOWNLOADER_MAP = {
      md: this.markdownParser,
    }

    return parserMap[type](explainDataList)
  }

  markdownParser(_: ArticleExplanation['paragraphs']): string {
    return ''
  }
}
