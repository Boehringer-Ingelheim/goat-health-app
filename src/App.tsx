import React, { Suspense } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from './components/Menu';
import Page from './pages/Page';
import ChapterPage from './pages/Chapter';
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
import Tutorial from './pages/Tutorial';
import Settings from './pages/Settings';
import AboutPage from './pages/About';
import { Theme } from './utils/theme';

interface ContainerProps {
  hasSeenTutorial: boolean;
  selectedTheme: Theme;
}

const App: React.FC<ContainerProps> = ({ hasSeenTutorial, selectedTheme }) => {
  if (!hasSeenTutorial) {
    return (
      <Suspense fallback="<App Suspense Loading>">
        <IonApp>
          <Tutorial />
        </IonApp>
      </Suspense>
    );
  }

  return (
    <Suspense fallback="<App Suspense Loading>">
      <IonApp className={selectedTheme.className}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route
                exact
                path="/page/home"
                render={(props) => {
                  return <Page {...props} />;
                }}
              />
              <Route
                path="/page/about"
                render={(props) => {
                  return <AboutPage />;
                }}
                exact={true}
              />
              <Route
                path="/chapter/:id/:subId"
                render={(props) => {
                  return <ChapterPage {...props} />;
                }}
                exact={true}
              />
              <Route
                path="/settings"
                render={(props) => {
                  return <Settings />;
                }}
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

const mapStateToProps = (state: any) => {
  return {
    hasSeenTutorial: state.user.hasSeenTutorial,
    selectedTheme: state.user.selectedTheme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // setSelectedPage: (page: string) => dispatch(setSelectedPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
