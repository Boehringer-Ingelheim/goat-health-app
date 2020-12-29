import React from 'react';
import * as Chapter01 from './01';
import * as Chapter02 from './02';

import './index.css';

interface ContainerProps {
  id: string;
  subId: string;
  isCard?: boolean;
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
  const { id, isCard = false, subId } = props;
  const chapterId = `${id}${subId}`;

  switch (chapterId) {
    case '0101':
      return <Chapter01.Chapter0101 isCard={isCard} />;
    case '0102':
      return <Chapter01.Chapter0102 isCard={isCard} />;
    case '0103':
      return <Chapter01.Chapter0103 isCard={isCard} />;
    case '0104':
      return <Chapter01.Chapter0104 isCard={isCard} />;
    case '0201':
      return <Chapter02.Chapter0201 isCard={isCard} />;
    case '0202':
      return <Chapter02.Chapter0202 isCard={isCard} />;
    case '0203':
      return <Chapter02.Chapter0203 isCard={isCard} />;
    case '0204':
      return <Chapter02.Chapter0204 isCard={isCard} />;
    case '0205':
      return <Chapter02.Chapter0205 isCard={isCard} />;
    case '0206':
      return <Chapter02.Chapter0206 isCard={isCard} />;
    default:
      return <div>Not Implemented Chapter {chapterId}</div>;
  }
};
