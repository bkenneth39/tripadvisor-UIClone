import { IonButton, IonCol, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import './Review.css'

const Review:React.FC = () => {
    return(
        <IonPage>
            <IonHeader style={{
                    maxWidth: '414px',
                    alignSelf: 'center',
                    backgroundColor: 'transparent'
                }}>
                <IonToolbar color="false">
                    <IonTitle>Review</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonGrid style={{
                    maxWidth:'414px',
                   
                    
                    }}>
                <IonRow  >
                    <IonCol size="12">
                        <div className="imageWrappers">
                        <IonButton shape="round" className="button">Write a Review</IonButton>
                        </div>
                        
                    </IonCol>
                </IonRow>

                <IonRow  >
                    <IonCol size="12">
                        <div className="imageWrappers2">
                        <IonButton shape="round" className="button">Upload a Photo</IonButton>
                        </div>
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>
    )
}
export default Review