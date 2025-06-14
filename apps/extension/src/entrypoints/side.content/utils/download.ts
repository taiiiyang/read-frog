import type { ArticleExplanation } from '@/types/content'
import type { DOWNLOAD_FILE_ITEMS } from '@/utils/constants/side'

export type DOWNLOAD_FILE_TYPES = keyof typeof DOWNLOAD_FILE_ITEMS

type DOWNLOADER_MAP = Record<DOWNLOAD_FILE_TYPES, (explainDataList: ArticleExplanation['paragraphs'], opts?: object) => void>

class Downloader {
  downloader: DOWNLOADER_MAP = {
    md: this.downloadMarkdown,
  }

  download(explainDataList: ArticleExplanation['paragraphs'], fileType: DOWNLOAD_FILE_TYPES, opts?: object) {
    this.downloader[fileType](explainDataList, opts)
  }

  downloadMarkdown(_: ArticleExplanation['paragraphs']) {
    // const content = this.markdownParser(explainDataList)
    // const blob = new Blob([], {
    // type: 'text/plain',
    // })
    // saveAs(blob, 'read frog')
  }

  markdownParser(_: ArticleExplanation['paragraphs']): string {
    return ''
  }
}

export default new Downloader()
