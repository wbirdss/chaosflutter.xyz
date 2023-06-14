export const siteMetadata = {
  title: "Chao's blog - Coding, Writing, Sharing",
  author: 'Chao',
  fullName: 'Chao Zheng',
  headerTitle: "Chao's blog",
  footerTitle: "Chao's blog - All rights reserved.",
  description:
    "Chao's coding journey - work and life stories through the keyboard of an open-minded Software Engineer",
  language: 'en-us',
  siteUrl: 'https://chaosflutter.xyz',
  siteRepo: 'https://github.com/wbirdss/chaosflutter.xyz',
  siteLogo: '/static/images/profile-square.jpg',
  image: '/static/images/profile-square.jpg',
  socialBanner: '/static/images/profile-square.jpg',
  email: 'zhchaozju@gmail.com',
  github: 'https://github.com/wbirdss',
  twitter: 'https://twitter.com/zhchaozju',
  medium: 'https://medium.com/@ivzhangyan',
  youtube: 'https://www.youtube.com/channel/UCYVxyn6DHeXxYxC75_ty9Ng',
  linkedin: '',
  facebook: '',
  locale: 'en-US',
  analyticsURL: 'https://analytics.google.com/analytics/web/',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F954ZQPP1J', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'wbirdss',
    twitter: 'zhchaozju',
    linkedin: '',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export const commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: 'wbirdss/chaosflutter.xyz', // process.env.GISCUS_REPO
    repositoryId: 'R_kgDOJMQZHQ', // process.env.GISCUS_REPOSITORY_ID
    category: 'Announcements', // process.env.GISCUS_CATEGORY
    categoryId: 'DIC_kwDOJMQZHc4CXB9l', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
