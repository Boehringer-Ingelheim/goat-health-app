import React from 'react';
import { useChapterSection } from '../../utils/hooks/useChapterSection';
import { ChapterViewCard } from './ChapterViewCard';
import { ChapterViewList } from './ChapterViewList';
import { ChapterViewPage } from './ChapterViewPage';

import './index.css';

interface ContainerProps {
  chapterId: string;
  sectionId: string;
  view?: 'card' | 'list' | 'page';
}

export const Chapter: React.FC<ContainerProps> = (props) => {
  const { chapterId, sectionId, view = 'page' } = props;

  const { color, image, link, title, view: chapterView } = useChapterSection(
    chapterId,
    sectionId,
  );

  if (view === 'card') {
    return (
      <ChapterViewCard
        color={color}
        imgSrc={image}
        routerLink={link.self}
        subTitle={title.chapter}
        title={title.section}
      />
    );
  }

  if (view === 'list') {
    return (
      <ChapterViewList
        color={color}
        content={chapterView.list.content}
        routerLink={link.self}
        subTitle={title.chapter}
        title={title.section}
      ></ChapterViewList>
    );
  }

  return (
    <ChapterViewPage
      color={color}
      content={chapterView.page.content}
      link={link}
      subTitle={title.chapter}
      title={title.section}
    ></ChapterViewPage>
  );
};
