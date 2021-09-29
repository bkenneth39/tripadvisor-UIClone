import { IonContent,IonRow, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonImg, IonCard, IonItem, IonButton, IonCardContent, IonIcon, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import data from "../json/landing.json";
import Rating from './components/rating';


const Home: React.FC = () => {
  let escape = data.escape
  let city = data.city
  let bigCard = data.bigCard;
  let miniCard = data.minicard;
  return (
    <IonPage className="body">
      <IonContent style={{
      
       display: 'flex',
      
      }}>
   
        <IonGrid className="boxHome" style={{
           
            maxWidth:'414px',
            alignContent: 'center'
          }}>
         <div>
          <IonRow style={{
            marginTop: '5vh'
          }}>
            <IonCol>
      
              <div className="header-box">
                <span style={{
                  marginLeft:"20px"
                }} >Explore</span>
                
                <div className="imgBox">
                  <img src="/img/profile.jpg" alt="position" className="img-profile"></img>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol >
            <div
                className="overflow-mini-card"
                style={{
                   
                    paddingBottom:"16px",
                    width: "100%",
                    paddingRight: "12.5px",
                    paddingLeft: "12.5px",
                    display:'inline-flex'
                }}
            >
              <div className="overfloxbox">

              
                {miniCard.map((value) => (
                    <div
                        className="margin-mini-card"
                        style={{
                            backgroundColor:"white",
                            width: value.width,
                            height: "48px",
                            padding: "16px",
                            whiteSpace: "normal",
                            display: 'inline-flex',
                            borderRadius: "25px",
                           
                        }}
                    key={value.id}>
                        <div className="" style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                          
                            <img
                                style={{
                                    width:'20px'
                                    
                                }}
                                src={`img/${value.imgurl}`}
                                alt=""
                            />
                            <p className="title-mini-card" style={{
                              marginLeft: '5px',
                            }}>{value.title}</p>
                        </div>
                       
                    </div>
                ))}
                </div>
            </div>
            </IonCol>
          </IonRow>
          </div>
        </IonGrid>
      
      <IonGrid className="giantImage" style={{
           backgroundImage: 'url(https://i.natgeofe.com/n/81b8122d-d4d9-4dea-9a76-63adcac8e6fe/grand-teton-national-park-3.jpg?w=636&h=425)',
           maxWidth:'414px',
           alignContent: 'center',
           marginTop:'3vh',
          backgroundSize:'cover',
          maxHeight:'55%'
         }}>
        <IonRow>
          <IonCol>
              <IonCard color="none" style={{
                height:'48vh',
                boxShadow:'none',
               
              }}>
              <IonCardHeader className="headerImageGiant">
                <IonCardTitle className="titleCard" style={{
                  color: 'white'
                }}>Goodbye to crushing heat and curshing crowds</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{
                fontSize: '0.8rem',
                color: 'white'
              }}>
               Why fall is the best time to visit our national parks <br/><br />
               <IonButton className="buttonWhite" shape="round">Get the intel</IonButton>
          </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid style={{
        maxWidth:'414px',
        alignContent: 'center',
        marginTop:'3vh',
      }}>
        <IonRow>
          <IonCol>
            <IonTitle>Break your cabin fever</IonTitle>
            
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonTitle size="small">Trending trails, parks, and tours for every taste</IonTitle>
            
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <div className="overflow-big-card" style={{
                   
                   paddingBottom:"16px",
                   width: "100%",
                   paddingRight: "12.5px",
                   paddingLeft: "12.5px",
                   display:'inline-flex'
               }}>
              
              <div className="overflowboxbig" style={{
                display:'inline-flex'
              }}>

              {bigCard.map((value) => (
                <IonCard color="none" style={{
                  width:'250px',
                  boxShadow:'none'
                }} key={value.id}>
                  <img src={value.imgurl} height="175px">

                  </img>
                  <IonCardHeader>
                    <IonCardTitle>
                      {value.title}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div>
                      <Rating value={parseInt(value.rating)} />
                    </div>
                    <p>{value.Category}</p>
                    <p>{value.Location}</p>
                  </IonCardContent>
                </IonCard>
              ))}
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>


      <IonGrid style={{
        maxWidth:'414px',
        alignContent: 'center',
       
      }}>
        <IonRow>
          <IonCol>
            <IonTitle>Small batch stays</IonTitle>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonTitle size="small">Cool cities, cooler boutique hotels</IonTitle>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <div className="overflow-big-card" style={{
                   
                   paddingBottom:"16px",
                   width: "100%",
                   paddingRight: "12.5px",
                   paddingLeft: "12.5px",
                   display:'inline-flex'
               }}>
              
              <div style={{
                width: '5000px',
                display:'inline-flex'
              }}>

              {city.map((value) => (
                <div style={{
                  marginTop: "2vh",
                  width: "230px",
                  height:"230px",
                  backgroundImage: `url(${value.imgurl})`,
                  display: "flex",
                  verticalAlign: "end",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  marginLeft: "9px"
                }} key={value.id}>
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
              ))}
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      

      <IonGrid style={{
        maxWidth:'414px',
        alignContent: 'center',
        marginTop:'3vh',
      }}>
        <IonRow>
          <IonCol >
            <IonTitle>Plan your next escape</IonTitle>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonTitle size="small">Family-friendly spots to explore</IonTitle>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <div className="overflow-big-card" style={{
                   
                   paddingBottom:"16px",
                   width: "100%",
                   paddingRight: "12.5px",
                   paddingLeft: "12.5px",
                   display:'inline-flex'
               }}>
              
              <div style={{
                width: "15000px",
                display:'inline-flex'
              }}>

              {escape.map((value) => (
                <IonCard key={value.id} color="none" style={{
                  width:'250px',
                  boxShadow: 'none'
                }}>
                  <img src={value.imgurl} height="175px">

                  </img>
                  <IonCardHeader>
                    <IonCardTitle>
                      {value.title}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{value.location}</p>
                  
                  </IonCardContent>
                </IonCard>
              ))}
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid className="giantImage" style={{
           backgroundImage: 'url(https://ca-times.brightspotcdn.com/dims4/default/001a71a/2147483647/strip/true/crop/3583x2199+0+0/resize/840x516!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc4%2F28%2Fa934bb0647eab894822ab008671a%2Fflamingo2.jpg)',
           maxWidth:'414px',
           alignContent: 'center',
           marginTop:'3vh',
          backgroundSize:'cover',
          maxHeight:'60%'
         }}>
        <IonRow>
          <IonCol>
              <IonCard color="none" style={{
                height:'48vh',
                boxShadow:'none',
               
              }}>
              <IonCardHeader className="headerImageGiant">
                <IonCardTitle className="titleCard" style={{
                  color:'white'
                }}>Explore Las Vegas, fork first</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{
                fontSize: '0.8rem',
                color:'white'
              }}>
               Our guide to the top celebrity chef restaurants in Vegas <br/><br />
               <IonButton className="buttonWhite" shape="round">Check them out</IonButton>
          </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>


      <IonGrid className="giantImage" style={{
           backgroundImage: 'url(https://lp-cms-production.imgix.net/2020-10/Dry-Tortugas-National-Park.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850)',
           maxWidth:'414px',
           alignContent: 'center',
           marginTop:'3vh',
          backgroundSize:'cover',
          maxHeight:'55%'
         }}>
        <IonRow>
          <IonCol>
              <IonCard color="none" style={{
                height:'48vh',
                boxShadow:'none',
               
              }}>
              <IonCardHeader className="headerImageGiant">
                <IonCardTitle className="titleCard" style={{
                  color:'white'
                }}>Pack that weekender bag</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{
                fontSize: '0.8rem',
                color:'white'
              }}>
               Our guide to last-minute road trips you can do right now <br/><br />
               <IonButton className="buttonWhite" shape="round">Read our guide</IonButton>
          </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid className="giantImage" style={{
           backgroundImage: 'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/57/76/f1/one-of-the-painting-on.jpg?w=400&h=-1&s=1)',
           maxWidth:'414px',
           alignContent: 'center',
           marginTop:'3vh',
          backgroundSize:'cover',
          maxHeight:'55%'
         }}>
        <IonRow>
          <IonCol>
              <IonCard color="none" style={{
               
                height:'48vh',
                boxShadow:'none',
                
               
              }}>
              <IonCardHeader className="headerImageGiant">
                <IonCardTitle className="titleCard" style={{
                  color:'white'
                }}>From dream trips to Michelin meals</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{
                fontSize: '0.8rem',
                color:'white'
              }}>
               All the ways we're celebrating Hispanic Heritage Month <br/><br />
               <IonButton  shape="round" className="buttonWhite">Read our guide</IonButton>
          </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default Home;
