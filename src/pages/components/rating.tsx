import { mic } from "ionicons/icons"

const Rating:React.FC <{
    value: number
}> = props => {
    let items: number[] = []
    let counter = 1
    let itemsnone:number[] = []
    

    for(let i=1;i<=props.value;i++){
        items.push(i)
    }
    let number:number = props.value
    let sisa:number = (5-number);


    for(let i=1;i<=sisa;i++){
        itemsnone.push(i)
    }

    return(
        <div style={{display:'inline-flex'}}>
            {items.map((value) => (
            <div key={value} style={{width: '12px', height:'12px'}}>
                <svg height="20" width="80">
                    <circle cx="5" cy="5" r="4" stroke="#00af87" strokeWidth="3" fill="#00af87" />
                </svg>
              </div>
            ))}
             {itemsnone.map((value) => (
            <div  key={value} style={{width: '12px', height:'12px'}}>
                <svg height="20" width="80">
                    <circle cx="5" cy="5" r="4" stroke="#00af87" strokeWidth="3" fill="none" />
                </svg>
              </div>
            ))}
        </div>
        
    )
}

export default Rating