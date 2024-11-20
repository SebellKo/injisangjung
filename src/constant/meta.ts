const title = 'injisangjung';
const desc = '안녕하세요. 고세종의 인지상정 입니다.';
const url = 'https://sebell.site';

export const META = {
  title: title,
  siteName: title,
  description: desc,
  keyword: [
    '인지상정',
    'injisangjung',
    '블로그',
    'blog',
    '일상',
    'daily',
    '개발',
    '프론트엔드',
    'frontend',
  ],
  url: url,
  openGraph: {
    title: title,
    description: desc,
    siteName: title,
    locale: 'ko_KR',
    type: 'website',
    url: url,
    images: {
      url: '/assets/images/preview_default.jpeg',
    },
  },
  icons: {
    icon: '/assets/favicon.svg',
  },
  verification: {
    google: 'AJzFmVX4rILI2-0uyzAXFW8lNgPAAgqDOYfdcU4SSVk',
    other: {
      'naver-site-verification': '5165db2bef3a83d8fe37df94188c2fcc3ddcb763',
    },
  },
} as const;
