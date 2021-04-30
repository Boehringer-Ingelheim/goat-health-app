import { FC } from 'react';
import { getChapterIds } from '../Chapters/utils';
import { ChapterSlider } from './ChapterSlider';
import './index.css';

export const ChaptersSlides: FC = () => {
  const chapterIds = getChapterIds();

  return (
    <>
      {chapterIds.map((chapterId) => {
        return <ChapterSlider chapterId={chapterId} key={chapterId} />;
      })}
    </>
  );
};
