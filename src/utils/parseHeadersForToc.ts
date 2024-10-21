import GithubSlugger from 'github-slugger';

const parseHeadersForToc = (raw: string) => {
  const calculateHeaderLevels = (arr: Array<Number>) => {
    const sorted = [...arr].sort((a, b) => Number(a) - Number(b));
    const min = sorted[0];
    const adjusted = arr.map((value) => Number(value) - Number(min) + 1);
    return adjusted;
  };

  const regex = /(?<flag>#{1,3})\s+(?<text>.+)/g;
  const headerMatches = Array.from(raw.matchAll(regex));

  const headerLevels = calculateHeaderLevels(
    headerMatches.map((match) => match.groups?.flag.length!)
  ) as Array<1 | 2 | 3>;

  const slugger = new GithubSlugger();

  const headers = headerMatches.map((header, index) => {
    const { text } = header.groups || { text: '' };
    const slug = slugger.slug(text);
    return { level: headerLevels[index], text, slug };
  });

  return headers;
};

export default parseHeadersForToc;
