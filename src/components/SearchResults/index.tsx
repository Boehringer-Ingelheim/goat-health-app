import { IonNote, IonRouterLink } from '@ionic/react';
import React from 'react';
import { Chapter, getChapterIdsByUrl } from '../Chapters';
import { LunrResult } from '../../utils/lunr';

interface ContainerProps {
  results: LunrResult[];
}

export const SearchResults: React.FC<ContainerProps> = (props) => {
  const { results } = props;

  if (results.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <IonNote>No results found</IonNote>
      </div>
    );
  }

  return (
    <>
      <IonNote>Found {results.length} results</IonNote>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {results.map((result, resultIndex) => {
          const { id: chapterUrl } = result;
          const { id, subId } = getChapterIdsByUrl(chapterUrl);
          return (
            <IonRouterLink
              key={resultIndex}
              routerLink={chapterUrl}
              routerDirection="forward"
            >
              <Chapter id={id} isCard subId={subId} />
            </IonRouterLink>
          );
        })}
      </div>
    </>
  );
};
