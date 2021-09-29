import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from "@ionic/react";
import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from "@ionic/react"
import {heart ,navigate, document, share, add, shareSocial, home, search, pencil} from 'ionicons/icons';
import { useState } from "react";
import Home from "./Home";
import Search from "./Search";
import Plan from "./Plan";
import Review from "./Review";
import './Main.css'

const Main:React.FC<{
    value: 'Explore' | 'Search' | 'Plan' | 'Review' 
}> = props => {
    const [selected, setSelected] = useState<'Explore' | 'Search' | 'Plan' | 'Review'>(props.value)
    
    return(
        <IonPage>
            <IonContent>
                {selected==='Explore' ? (
                    <Home />
                ) : selected==='Search' ? (
                    <Search />
                ) : selected==='Plan' ? (
                    <Plan />
                ) : selected==='Review' ? (
                    <Review />
                ) : ''}

            </IonContent>
            <IonSegment className="segmentMain" style={{
                    maxWidth: '414px',
                    alignSelf: 'center',
                    
                }} value={selected} onIonChange={(e) => {
                    let valueTemp = e.detail.value
                    if(valueTemp==='Explore'){
                        setSelected(valueTemp)
                    } else if(valueTemp==='Search'){
                        setSelected(valueTemp)
                    } else if(valueTemp==='Plan'){
                        setSelected(valueTemp)
                    } else if(valueTemp==='Review'){
                        setSelected(valueTemp)
                    } else {
                        setSelected('Explore')
                    }
                }}>
                <IonSegmentButton value="Explore" className="buttonMain">
                    <IonLabel>Explore</IonLabel>
                    <IonIcon className="icon"  icon={home} size="medium" ></IonIcon>
                </IonSegmentButton>
                <IonSegmentButton value="Search">
                    <IonLabel>Search</IonLabel>
                    <IonIcon className="icon"  icon={search} size="medium"></IonIcon>
                </IonSegmentButton>
                <IonSegmentButton value="Plan">
                    <IonLabel>Plan</IonLabel>
                    <IonIcon className="icon"  icon={heart} size="medium"></IonIcon>
                </IonSegmentButton>
                <IonSegmentButton value="Review">
                    <IonLabel>Review</IonLabel>
                    <IonIcon className="icon"  icon={pencil} size="medium"></IonIcon>
                </IonSegmentButton>
            </IonSegment>
        </IonPage>
    )
}
export default Main;