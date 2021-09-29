import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from "@ionic/react"
import {heart ,navigate, document, share, add, shareSocial} from 'ionicons/icons';
import { useState } from "react";
import './Trips.css'

const Trips:React.FC = () => {
    let [count, setCount] = useState<Number>(0)
    let [inputValue, setInputValue] = useState<string>("")
    return(
        <IonGrid style={{
            maxWidth:'414px',
            alignContent: 'center'
            }}>
            <IonRow className="row">
                <IonCol style={{
                    display: 'inline-flex',
                    alignContent: "center"
                }}>
                    <div className="iconTrip" style={{
                       
                    }}>

                    <IonIcon className="iconini"  icon={heart} size="medium"></IonIcon>
                    </div>
                    <span style={{
                        marginLeft: '3vh',
                        alignSelf: 'center',
                        
                    }}>Save places you'd like to visit</span>
                </IonCol>
            </IonRow>

            <IonRow className="row">
                <IonCol style={{
                    display: 'inline-flex',
                    alignContent: "center"
                }}>
                    <div className="iconTrip" style={{
                       
                    }}>

                    <IonIcon className="iconini"  icon={navigate} size="medium"></IonIcon>
                    </div>
                    <span style={{
                        marginLeft: '3vh',
                        alignSelf: 'center',
                        
                    }}>See your saves on a map</span>
                </IonCol>
            </IonRow>

            <IonRow className="row">
                <IonCol style={{
                    display: 'inline-flex',
                    alignContent: "center"
                }}>
                    <div className="iconTrip" style={{
                       
                    }}>

                    <IonIcon className="iconini"  icon={document} size="medium"></IonIcon>
                    </div>
                    <span style={{
                        marginLeft: '3vh',
                        alignSelf: 'center',
                        
                    }}>Keep track of notes, links, and more</span>
                </IonCol>
            </IonRow>

            <IonRow className="row">
                <IonCol style={{
                    display: 'inline-flex',
                    alignContent: "center"
                }}>
                    <div className="iconTrip" style={{
                       
                    }}>

                    <IonIcon className="iconini"  icon={shareSocial} size="medium"></IonIcon>
                    </div>
                    <span style={{
                        marginLeft: '3vh',
                        alignSelf: 'center',
                        
                    }}>Share and collaborate on your plans</span>
                </IonCol>
            </IonRow>


            <IonRow className="row">
                <IonCol>
                    <span>Trip name</span>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonInput placeholder="Ex: Weekend in NYC" value={inputValue} className="inputWords"  onIonChange={e => {
                    if(e.detail.value){
                        if(e.detail.value.length <=50){
                            let numberTemp = e.detail.value.length
                            setCount(numberTemp)
                            setInputValue(e.detail.value)
                        } else {
                            alert("You have reached maximum value!")
                            setCount(50)
                            setInputValue(inputValue)
                        }
                    } else{
                        setCount(0)
                        setInputValue("")
                    }
                    }}></IonInput>
            </IonRow>
            <IonRow>
                <IonCol style={{textAlign: 'right'}}>
                    {count}/50
                </IonCol>
            </IonRow>

            <IonRow className="row">
                <IonCol>

                <IonButton shape="round" expand="block" color="dark">Create Trip</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}
export default Trips