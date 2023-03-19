/* eslint-disable import/no-anonymous-default-export */
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

export default async (
  req: { headers: { host: any } },
  res: {
    writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void
    end: (arg0: any) => void
  }
) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/festivals', changefreq: 'daily', priority: 0.3 },
    { url: '/kingsday', changefreq: 'daily', priority: 0.3 },
    { url: '/ade', changefreq: 'daily', priority: 0.3 },
    { url: '/event/open-air-03-06', changefreq: 'daily', priority: 0.3 },
    { url: '/event/chin-chin-festival', changefreq: 'daily', priority: 0.3 },
    { url: '/event/kingsland-27-04', changefreq: 'daily', priority: 0.3 },
  ]

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: { toString: () => any }) => data.toString())

  res.end(xmlString)
}
