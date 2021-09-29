import { IonCol, IonGrid, IonRow } from "@ionic/react"

const Saves:React.FC = () => {
    return(
        <IonGrid style={{ 
            marginTop: '3vh',
            maxWidth:'414px',
            alignContent: 'center', 
            textAlign: 'center'}}>
            <IonRow>
                <IonCol>No saves yet</IonCol>
            </IonRow>
            <IonRow>
                <IonCol style={{fontSize: '14px'}}>Places you save will appear here</IonCol>
            </IonRow>
        </IonGrid>
    )
}
export default Saves