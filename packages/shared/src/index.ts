export const READER_SUPPORTED_MIME_TYPES = ['application/x-cbz' as const, 'application/epub+zip' as const, 'text/xml' as const, 'application/x-cbr' as const, 'application/zip' as const]
export const READER_SUPPORTED_EXTENSIONS = ['.epub', '.txt', '.cbz', '.cbr']

export const design = {
  palette: {
    orange: `rgb(225, 100, 50, 1)`,
  },
};

export const links = {
  documentation: `https://docs.oboku.me`,
  app: `https://app.oboku.me`,
  linkedin: `https://www.linkedin.com/in/maxime-bret`,
};

export type OPF = {
  package?: {
    manifest?: {
      item?: {
        id?: string
        href?: string
        'media-type'?: string
      }[]
    },
    metadata?: {
      'dc:title'?: string | {
        '#text': string;
      }
      'title'?: any,
      'dc:date'?: any,
      'dc:creator'?: { '#text'?: string } | { '#text'?: string }[],
      'dc:subject'?: any,
      'dc:language'?: any,
      'dc:publisher'?: { '#text': string, id: string } | string,
      'dc:rights'?: any,
      meta?: {
        name?: 'cover' | 'unknown'
        content?: string
      } | {
        name?: 'cover' | 'unknown'
        content?: string
      }[]
    }
  }
}

export * as directives from "./directives";

export * from "./docTypes";

export * from './dataSources'

import * as validators from './validators'

export * as crypto from './crypto'

export { ObokuErrorCode, ObokuSharedError } from './errors'

export {
  validators
}