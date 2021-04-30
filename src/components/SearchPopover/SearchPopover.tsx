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
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSearchView } from '../../data/user/user.slice';
import { selectCurrentSearchView } from '../../data/user/user.selector';

export const SearchPopover: FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  const dispatch = useDispatch();
  const currentSearchView = useSelector(selectCurrentSearchView);
  const { t } = useTranslation();

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
            value={currentSearchView}
            onIonChange={(event) =>
              dispatch(setCurrentSearchView(event.detail.value))
            }
          >
            <IonListHeader>
              <IonLabel>{t('SEARCH.POPOVER.VIEW.TITLE')}</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>{t('SEARCH.POPOVER.VIEW.ITEM.CARD')}</IonLabel>
              <IonRadio slot="end" value="card" />
            </IonItem>
            <IonItem lines="none">
              <IonLabel>{t('SEARCH.POPOVER.VIEW.ITEM.LIST')}</IonLabel>
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
