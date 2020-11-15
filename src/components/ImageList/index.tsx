import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonSkeletonText,
  IonNote,
  IonButton,
  IonSpinner,
} from '@ionic/react';
import './index.css';
import { useTranslation } from 'react-i18next';

const ImageCardSkelleton = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonSkeletonText animated style={{ width: '25%' }} />
        </IonCardSubtitle>
        <IonCardTitle>
          <IonSkeletonText animated style={{ height: '28px', width: '90%' }} />
        </IonCardTitle>
      </IonCardHeader>
      <IonSkeletonText animated style={{ height: '450px', width: '450px' }} />
      <IonCardHeader>
        <IonCardSubtitle>
          <IonSkeletonText animated style={{ width: '50%' }} />
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '75%' }} />
      </IonCardContent>
    </IonCard>
  );
};

interface ImageListProps {
  imageList: any;
  loadImageListMore: Function;
}

export const ImageList: React.FC<ImageListProps> = props => {
  const { imageList, loadImageListMore } = props;
  const { t } = useTranslation();

  if (imageList.error) {
    return (
      <div className="ion-padding ion-text-center">
        <IonNote>
          <b>{t('IMAGELIST.ERROR.NOTE.HEADER')}</b>
          <p>{t('IMAGELIST.ERROR.NOTE.PARAGRAPH')}</p>
        </IonNote>
      </div>
    );
  }

  const { loading, data } = imageList;

  if (loading && data.values.length === 0) {
    return (new Array(10)
      .fill(null)
      .map((value, index) => (
        <ImageCardSkelleton key={index} />
      )) as any) as JSX.Element;
  }

  if (data.values.length === 0) {
    return (
      <div className="ion-padding ion-text-center">
        <IonNote>
          <b>{t('IMAGELIST.NODATA.NOTE.HEADER')}</b>
          <p>{t('IMAGELIST.NODATA.NOTE.PARAGRAPH')}</p>
        </IonNote>
      </div>
    );
  }

  return (
    <>
      {data.values.map((item: any) => {
        return (
          <IonCard key={item.id}>
            <IonCardHeader>
              <IonCardSubtitle>{t('IMAGELIST.ITEM.AUTHOR')}</IonCardSubtitle>
              <IonCardTitle>{item.author}</IonCardTitle>
            </IonCardHeader>
            <IonImg src={item.download_url.thumbnail.size_400}></IonImg>
            <IonCardHeader>
              <IonCardSubtitle>{`Id: ${item.id}`}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{JSON.stringify(item)}</IonCardContent>
          </IonCard>
        );
      })}
      <IonButton
        disabled={loading}
        expand="block"
        onClick={() => loadImageListMore(data.next)}
      >
        {loading ? <IonSpinner></IonSpinner> : 'Load More'}
      </IonButton>
    </>
  );
};

export default ImageList;
