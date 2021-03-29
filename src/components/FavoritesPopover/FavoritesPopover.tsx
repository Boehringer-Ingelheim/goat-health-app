import {
  IonPopover,
  IonButton,
  IonIcon,
  IonLabel,
  IonItem,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
} from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentFavoritesView } from '../../data/user/user.selector';
import { setCurrentFavoritesView } from '../../data/user/user.slice';

export const FavoritesPopover: React.FC = () => {
  const { t } = useTranslation();
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  const dispatch = useDispatch();
  const currentView = useSelector(selectCurrentFavoritesView);

  return (
    <>
      <IonPopover
        cssClass="my-custom-class"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <IonList className={'active'}>
          <IonRadioGroup
            value={currentView}
            onIonChange={(event) =>
              dispatch(setCurrentFavoritesView(event.detail.value))
            }
          >
            <IonListHeader>
              <IonLabel>{t('FAVORITES.POPOVER.VIEW.TITLE')}</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>{t('FAVORITES.POPOVER.VIEW.ITEM.CARD')}</IonLabel>
              <IonRadio slot="end" value="card" />
            </IonItem>
            <IonItem lines="none">
              <IonLabel>{t('FAVORITES.POPOVER.VIEW.ITEM.LIST')}</IonLabel>
              <IonRadio slot="end" value="list" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonPopover>
      <IonButton
        onClick={(event: any) => {
          event.persist();
          setShowPopover({ showPopover: true, event });
        }}
      >
        <IonIcon
          slot="icon-only"
          ios={ellipsisHorizontal}
          md={ellipsisVertical}
        />
      </IonButton>
    </>
  );
};
