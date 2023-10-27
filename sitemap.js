/** @format */

const {SitemapStream} = require('sitemap')
const {createWriteStream} = require('fs')

let sitemap = new SitemapStream({hostname: 'http://grell.pro'})

let writeStream = createWriteStream('public/sitemap.xml')
sitemap.pipe(writeStream)

sitemap.write({url: '/', changefreq: 'daily', priority: 0.3})
sitemap.write({url: '/about', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/about', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/faq', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/new-roof', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/projects', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/impact', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/repair', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/replacement', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/warranty', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/maintenance', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '/press', changefreq: 'monthly', priority: 0.7})
sitemap.write({url: '*', priority: 0.7})

sitemap.end()

console.log('Sitemap created successfully')
