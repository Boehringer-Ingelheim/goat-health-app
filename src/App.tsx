import { StatusBar, Style } from '@capacitor/status-bar';
import {
  getPlatforms,
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
// import './theme/variables.css';
import './theme/bright.theme.css';
import './theme/dark.theme.css';
import { Menu } from './components/Menu';
import { selectCurrentTheme } from './data/user/user.selector';
import { AboutPage } from './pages/About';
import { ChapterPage } from './pages/Chapter';
import { HomePage } from './pages/Page';
import { SearchPage } from './pages/Search';
import { SettingsPage } from './pages/Settings';
// import Tutorial from './pages/Tutorial';
import { THEMES } from './utils/theme';
import { CreditsPage } from './pages/CreditsPage';

const App: React.FC = () => {
  const currentTheme = useSelector(selectCurrentTheme);

  useEffect(() => {
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };
    const platforms = getPlatforms();
    if (platforms.includes('capacitor')) {
      setStatusBarStyleDark();
    }
  }, []);

  return (
    <Suspense fallback="App Suspense Loading">
      <IonApp className={THEMES[currentTheme].className}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route exact path="/page/home" render={() => <HomePage />} />
              <Route
                path="/page/about"
                render={() => <AboutPage />}
                exact={true}
              />
              <Route
                path="/page/search"
                render={() => <SearchPage />}
                exact={true}
              />
              <Route
                path="/chapter/:chapterId/:sectionId"
                render={(props) => {
                  return <ChapterPage {...props} />;
                }}
                exact={true}
              />
              <Route
                path="/settings"
                render={() => <SettingsPage />}
                exact={true}
              />
              <Route
                path="/credits"
                render={() => <CreditsPage />}
                exact={true}
              />
              <Route
                path="/"
                render={() => <Redirect to="/page/home" />}
                exact={true}
              />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </Suspense>
  );
};

export default App;
