// Write your code here.
import  './index.css'

const CardItem=(props)=>{
 const{cardDetail , key}=props
    { title, description, imgUrl,className }=cardDetail
}
   
return(
    <li className={`${className}`>
        <div>
            <h1 className="head">{title}</h1>
            <p className="para">{description}</p>
            <img src={imgUrl} className="img1"/>>
        </div>
    </li>

)
