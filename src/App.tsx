import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
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
import { CreditsPage } from './pages/CreditsPage';
import { FavoritesPage } from './pages/Favorites';
import { HomePage } from './pages/Home';
import { SearchPage } from './pages/Search';
import { SettingsPage } from './pages/Settings';
// import Tutorial from './pages/Tutorial';
import { THEMES } from './utils/theme';

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

    // NOTE: Current workaround to still show splash-screen until app is finally rendered
    SplashScreen.show({
      showDuration: 750,
      autoHide: true,
    });
  }, []);

  return (
    <Suspense fallback="App Suspense Loading">
      <IonApp className={THEMES[currentTheme].className}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route exact path="/home" render={() => <HomePage />} />
              <Route path="/about" render={() => <AboutPage />} exact />
              <Route path="/search" render={() => <SearchPage />} exact />
              <Route
                path={['/favorite', '/favorites']}
                render={() => <FavoritesPage />}
                exact
              />
              <Route path="/settings" render={() => <SettingsPage />} exact />
              <Route path="/credits" render={() => <CreditsPage />} exact />
              <Route
                path="/chapter/:chapterId/:sectionId"
                render={() => <ChapterPage />}
                exact
              />
              <Route path="/" render={() => <Redirect to="/home" />} exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </Suspense>
  );
};

export default App;
