import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Search from './pages/Search'
import Plan from './pages/Plan';
import Review from './pages/Review';
import Main from './pages/Main';
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
import './theme/variables.css';
import { heart, home, mailOutline, pencil, searchOutline, videocamOutline } from 'ionicons/icons';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter >
    <IonTabs >
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
       
        <Route exact path="/plan">
            <Plan />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>


    
      <IonTabBar slot="bottom" style={{
        Width: '414px',
        
        justifyContent: 'center'
      }}>
      <IonTabButton tab="explore" href="/home">
        <IonIcon icon={home} />
        <IonLabel>Explore</IonLabel>
      </IonTabButton>
      <IonTabButton tab="search" href="/search">
        <IonIcon icon={searchOutline} />
        <IonLabel>Search</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Plan" href="/plan">
        <IonIcon icon={heart} />
        <IonLabel>Plan</IonLabel>
      </IonTabButton>
      <IonTabButton tab="review" href="/review">
        <IonIcon icon={pencil} />
        <IonLabel>Review</IonLabel>
      </IonTabButton>
    </IonTabBar>
    </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
