export type GetComicsByIdSchema = {
  format?: string; 
  formatType?: string; 
  noVariants?: boolean; 
  dateDescriptor?: string; 
  dateRange?: number; 
  title?:string; 
  titleStartsWith?:string; 
  startYear?: number; 
  issueNumber?: number; 
}

export type GetCharactersSchema = {
  name?:string, 
  nameStartsWith?: string, 
  modifiedSince?: Date, 
  comics?: number, 
  series?: number, 
  events?: number, 
  stories?: number, 
  orderBy?: string, 
  limit?: number, 
  offset?: number
}

export type GetDoRequestSchema = {
  method: string, 
  body?: any,
  headers?: {}, 
  params?: any, 
  path: string
}

export type GetCharactersResponse = {
  code: number,
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  data: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: [
      {
        id: number,
        name: string,
        description: string,
        modified: Date,
        resourceURI: string,
        urls: [
          {
            type: string,
            url: string
          }
        ],
        thumbnail: {
          path: string,
          extension: string
        },
        comics: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        stories: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              type: string
            }
          ]
        },
        events: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        series: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        }
      }
    ]
  },
  etag: string
}

export type GetCharactersBtIdResponse = {
  code: number,
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  data: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: [
      {
        id: number,
        name: string,
        description: string,
        modified: Date,
        resourceURI: string,
        urls: [
          {
            type: string,
            url: string
          }
        ],
        thumbnail: {
          path: string,
          extension: string
        },
        comics: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        stories: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              type: string
            }
          ]
        },
        events: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        series: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        }
      }
    ]
  },
  etag: string
}

export type GetComicsByIdResponse = {
  code: number,
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  data: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: [
      {
        id: number,
        digitalId: number,
        title: string,
        issueNumber: number,
        variantDescription: string,
        description: string,
        modified: Date,
        isbn: string,
        upc: string,
        diamondCode: string,
        ean: string,
        issn: string,
        format: string,
        pageCount: number,
        textObjects: [
          {
            type: string,
            language: string,
            text: string
          }
        ],
        resourceURI: string,
        urls: [
          {
            type: string,
            url: string
          }
        ],
        series: {
          resourceURI: string,
          name: string
        },
        variants: [
          {
            resourceURI: string,
            name: string
          }
        ],
        collections: [
          {
            resourceURI: string,
            name: string
          }
        ],
        collectedIssues: [
          {
            resourceURI: string,
            name: string
          }
        ],
        dates: [
          {
            type: string,
            date: Date
          }
        ],
        prices: [
          {
            type: string,
            price: number
          }
        ],
        thumbnail: {
          path: string,
          extension: string
        },
        images: [
          {
            path: string,
            extension: string
          }
        ],
        creators: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              role: string
            }
          ]
        },
        characters: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              role: string
            }
          ]
        },
        stories: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              type: string
            }
          ]
        },
        events: {
          available: number,
          returned: number,
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        }
      }
    ]
  },
  etag: string
}

