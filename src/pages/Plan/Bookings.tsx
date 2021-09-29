import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react"

const Bookings:React.FC = () => {
    return(
        <IonGrid style={{
            maxWidth:'414px',
            alignContent: 'center'
            }}>
           <IonRow className="row">
                <IonCol>

                <IonButton shape="round" expand="block" color="dark">View my Bookings</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}
export default Bookings