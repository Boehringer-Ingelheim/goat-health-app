import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { warning } from 'ionicons/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Chapter01 } from '../../data/chapter/chapter01';
import { Chapter as Chapter02 } from '../../data/chapter/chapter02';

const ChapterSectionNotAvailable = () => {
  const { t } = useTranslation();
  return (
    <IonItem
      className="ion-margin-vertical"
      color="warning"
      detail={false}
      lines="none"
    >
      <IonIcon icon={warning} size="small" slot="start" />
      <IonLabel>
        {t(`APP.ERROR.NOT_AVAILABLE_CHAPTER_SECTION_CONTENT`)}
      </IonLabel>
    </IonItem>
  );
};

export const getChapterSectionContent = (
  chapterId: string,
  sectionId: string,
) => {
  if (chapterId === '01') {
    if (sectionId === '01') {
      return Chapter01.Section01();
    }
    if (sectionId === '02') {
      return Chapter01.Section02();
    }
    if (sectionId === '03') {
      return Chapter01.Section03();
    }
    if (sectionId === '04') {
      return Chapter01.Section04();
    }
  }

  if (chapterId === '02') {
    if (sectionId === '01') {
      return Chapter02.Section01();
    }
    if (sectionId === '02') {
      return Chapter02.Section02();
    }
    if (sectionId === '03') {
      return Chapter02.Section03();
    }
    if (sectionId === '04') {
      return Chapter02.Section04();
    }
    if (sectionId === '05') {
      return Chapter02.Section05();
    }
    if (sectionId === '06') {
      return Chapter02.Section06();
    }
  }

  return ChapterSectionNotAvailable();
};
