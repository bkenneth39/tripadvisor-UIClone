import { IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react"
import Trips from "./Plan/Trips"
import Saves from "./Plan/Saves"
import Bookings from "./Plan/Bookings"
const Plan:React.FC = () => {
    const [selected,setSelected] = useState<string>('Trips')
    return(
        <IonPage>
             <IonHeader style={{
                    maxWidth: '414px',
                    alignSelf: 'center',
                    backgroundColor: 'transparent'
                }}>
                 <IonToolbar color="false">
                     <IonTitle>
                         Plan
                     </IonTitle>
                 </IonToolbar>
                 <IonSegment value={selected} onIonChange={e => {
                     let selectedtemp = e.detail.value
                     if(selectedtemp === 'Trips'){
                        setSelected(selectedtemp)
                     } else if(selectedtemp === 'Saves'){
                        setSelected(selectedtemp)
                     } else {
                         setSelected('Bookings')
                     }
                   }} style={{
                    
                 }}>
                    <IonSegmentButton value="Trips">
                        <IonLabel>Trips</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Saves">
                        <IonLabel>Saves</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Bookings">
                        <IonLabel>Bookings</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
             </IonHeader>

            <IonContent>
                {selected==='Trips' ? (
                    <Trips />
                ) : selected==='Saves' ? (
                    <Saves />
                ) : selected==='Bookings' ? (
                    <Bookings />
                ) : ''}
            </IonContent>
        </IonPage>
    )
}
export default Plan