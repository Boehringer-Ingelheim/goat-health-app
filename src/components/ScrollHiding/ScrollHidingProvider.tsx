import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { ScrollDetail } from '@ionic/core/dist/types/components/content/content-interface';
import React, { createContext, useContext, useState } from 'react';

// Create context object
export const ScrollHidingContext = createContext({
  onMove: () => {},
  visible: true,
});

export const ScrollHidingProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(true);

  const onMove = () => {
    setVisible((visible) => !visible);
  };

  return (
    <ScrollHidingContext.Provider value={{ onMove, visible }}>
      {children}
    </ScrollHidingContext.Provider>
  );
};

export const ScrollHiding: React.FC = ({ children }) => {
  const { visible, onMove } = useContext(ScrollHidingContext);
  console.log('🚀 ~ file: ScrollHiding.tsx ~ line 62 ~ visible', visible);

  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle onClick={onMove}>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};
