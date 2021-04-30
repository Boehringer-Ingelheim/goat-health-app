import { useMemo } from 'react';
import { chapter } from '../ChapterContent/index';
import { CS } from '../index';

export const useChapterSectionComponent = ({ chapterId, sectionId }: CS) =>
  useMemo(() => chapter[chapterId][sectionId], [chapterId, sectionId]);
