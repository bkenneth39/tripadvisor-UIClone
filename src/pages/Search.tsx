import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react"
import './Home.css'
import './Search.css'
import data from  "../json/search.json"
import Rating from "./components/rating"
const Search: React.FC = () => {
    let searchValue = data.searchValue
    let attraction = data.attraction
    let city = data.city
    return(
        <IonPage>
              <IonHeader style={{
                maxWidth: '414px',
                alignSelf: 'center',
                backgroundColor: 'transparent'
            }}>
                <IonToolbar color="false">
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{
                display: 'flex'
            }}>
              

                <IonGrid style={{
                    maxWidth:'414px',
                    alignContent: 'center'
                    }}>
                    <IonRow>
                        <IonCol>
                            <IonSearchbar placeholder="Where to?" showCancelButton="focus" style={{
                                
                            }} className="searchInput"></IonSearchbar>
                        </IonCol>
                    </IonRow>

                    <IonRow style={{
                        marginTop: '5vh'
                    }}>
                        <IonCol>
                        <span style={{
                                fontSize:"20px",
                                fontWeight:"bold",
                                
                            }}>Your Recent Searches</span>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                        <div
                            className="overflow-mini-card"
                            style={{
                                marginTop: '10px',
                                paddingBottom:"16px",
                                width: "100%",
                                paddingRight: "12.5px",
                                paddingLeft: "12.5px",
                                display:'inline-flex'
                            }}
                        >
                        <div className="overfloxbox">

                        
                            {searchValue.map((value) => (
                                <div
                                    className="margin-mini-card"
                                    style={{
                                        backgroundColor:"transparent",
                                        width: value.width,
                                        height: "68px",
                                        padding: "16px",
                                        whiteSpace: "normal",
                                        display: 'inline-flex',
                                        borderRadius: "30px",
                                        border:'solid #595959',
                                       
                                    }}
                                    key={value.id}
                                >
                                    <div className="" style={{
                                    display: 'block',
                                    flexDirection: 'row',
                                    }}>
                                    
                                        <p className="" style={{
                                            marginLeft: '5px',
                                            fontSize: '14px',
                                            margin: '10px 0px 0px 5px'
                                        }}><strong>{value.title}</strong></p>

                                        <p style={{
                                            marginLeft: '5px',
                                            margin:'8px 0px 12px 5px',
                                            fontSize:'10px',
                                        }}>{value.notes}</p>
                                    </div>
                                
                                </div>
                            ))}
                            </div>
                        </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid style={{
                    maxWidth:'414px',
                    alignContent: 'center'
                    }}>
                    <IonRow>
                        <IonCol>
                            <span className="attractionTitle">Attractions Nearby</span>
                        </IonCol>
                        <IonCol style={{
                            alignSelf: 'end',
                            justifySelf: 'end',
                            textAlign: 'right'
                        }}>
                            <span>See all</span>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                        <div style={{
                            display:'block'
                        }}>
                            {attraction.map((value) => (
                                <div className="cardWrapper" style={{
                                    display:'inline-flex',
                                   
                                    width: '100%',
                                    
                                }} key={value.id}>
                                    <div className="imageWrapper">
                                        <img src={value.imgurl} alt={value.title} className="imageCity" style={{
                                            // marginLeft: '20px'
                                        }}/>
                                    </div>
                                    <IonCard color="none" className="cityCard" style={{
                                      boxShadow:'none'
                                       
                                    }}>
                                        <IonCardHeader>
                                            <IonCardTitle className="titleCard">
                                                {value.title}
                                            </IonCardTitle>
                                        </IonCardHeader>

                                        <IonCardContent className="descCity">
                                            <Rating value={parseInt(value.star)} />
                                            <p>{value.category}</p>
                                        </IonCardContent>
                                    </IonCard>
                                </div>
                            ))}
                        </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid  style={{
                    maxWidth:'414px',
                    alignContent: 'center'
                    }}>
                    <IonRow>
                        <IonCol>
                        <span style={{
                                fontSize:"20px",
                                fontWeight:"bold",
                                
                            }}>Destinations travelers love</span>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                            {city.map((value) => (
                        <IonCol size="6" key={value.id}>

                        <div style={{
                            marginTop: "2vh",
                          
                            height:"180px",
                            backgroundImage: `url(${value.imgurl})`,
                            display: "flex",
                            verticalAlign: "end",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            marginLeft: "9px"
                            }}>
                            <div style={{
                                fontWeight: "bold",
                                boxShadow: "0,0,4",
                                alignSelf: "end",
                                marginLeft: "2vh",
                                marginBottom: "2vh",
                                fontSize: "1.5rem",
                                color:'white'
                            }}>{value.title}</div>
                            </div>
                        </IonCol>
                            ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Search