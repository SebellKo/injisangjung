'use client';

import React, { useEffect, useRef, useState } from 'react';
import style from '@/styles/posts/content/toc.module.css';
import Link from 'next/link';
import parseHeadersForToc from '@/utils/parseHeadersForToc';

interface Props {
  content: string;
}

function Toc({ content }: Props) {
  const observer = useRef<IntersectionObserver>();
  const [activeToc, setActiveToc] = useState('');
  const tocContents = parseHeadersForToc(content);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveToc(entry.target.id);
        });
      },
      {
        rootMargin: '0px 0px -90% 0px',
        threshold: 0.1,
      }
    );
    const headingElements = document.querySelectorAll(
      '.markdownDiv h1, .markdownDiv h2, .markdownDiv h3'
    );
    headingElements.forEach((element) => observer.current?.observe(element));

    return () => observer.current?.disconnect();
  }, [content]);

  return (
    <div className={style.anchor_list_container}>
      <ul className={style.anchor_list}>
        {tocContents.map((toc) => (
          <li className={style.anchor_list_item} key={toc.slug}>
            <Link
              key={toc.slug}
              className={`${
                activeToc === toc.slug ? style.main_anchor : style.sub_anchor
              }`}
              href={`#${toc.slug}`}
              onClick={() => setActiveToc(toc.slug)}
            >
              {toc.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Toc;
