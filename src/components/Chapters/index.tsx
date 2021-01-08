import React from 'react';
import { ChapterId } from '../../utils/chapters';
import { useChapterSection } from '../../utils/hooks/useChapterSection';
import { ChapterViewCard } from './ChapterViewCard';
import { ChapterViewList } from './ChapterViewList';
import { ChapterViewPage } from './ChapterViewPage';
import './index.css';

interface ContainerProps {
  chapterId: ChapterId;
  sectionId: string;
  view?: 'card' | 'list' | 'page';
}

export const Chapter: React.FC<ContainerProps> = (props) => {
  const { chapterId, sectionId, view = 'page' } = props;

  const { color, image, title, view: chapterView, url } = useChapterSection(
    chapterId,
    sectionId,
  );

  if (view === 'card') {
    return (
      <ChapterViewCard
        color={color}
        imgSrc={image}
        routerLink={url}
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
        routerLink={url}
        subTitle={title.chapter}
        title={title.section}
      ></ChapterViewList>
    );
  }

  return (
    <ChapterViewPage
      chapterId={chapterId}
      color={color}
      content={chapterView.page.content}
      sectionId={sectionId}
      subTitle={title.chapter}
      title={title.section}
    ></ChapterViewPage>
  );
};
