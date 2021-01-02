import React from 'react';
import * as Chapter01 from './01';
import * as Chapter02 from './02';

import './index.css';

interface ContainerProps {
  id: string;
  routerLink?: string;
  subId: string;
  view?: 'card' | 'list' | 'page';
}

export const getChapterIdsByUrl = (url: string) => {
  // url syntax: '/chapter/01/01'
  if (url.startsWith('/chapter/')) {
    const [id, subId] = url.split('/').slice(2);
    return { id, subId };
  }
  return { id: '', subId: '' };
};

export const Chapter: React.FC<ContainerProps> = (props) => {
  const { id, subId, view = 'page' } = props;
  const chapterId = `${id}${subId}`;

  switch (chapterId) {
    case '0101':
      return <Chapter01.Chapter0101 view={view} />;
    case '0102':
      return <Chapter01.Chapter0102 view={view} />;
    case '0103':
      return <Chapter01.Chapter0103 view={view} />;
    case '0104':
      return <Chapter01.Chapter0104 view={view} />;
    case '0201':
      return <Chapter02.Chapter0201 view={view} />;
    case '0202':
      return <Chapter02.Chapter0202 view={view} />;
    case '0203':
      return <Chapter02.Chapter0203 view={view} />;
    case '0204':
      return <Chapter02.Chapter0204 view={view} />;
    case '0205':
      return <Chapter02.Chapter0205 view={view} />;
    case '0206':
      return <Chapter02.Chapter0206 view={view} />;
    default:
      return <div>Not Implemented Chapter {chapterId}</div>;
  }
};
