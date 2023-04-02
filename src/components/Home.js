import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Work from '../images/workout.svg';
import front from '../images/front.jpg';

var url="home"
function Home(props){
    const [data,getData]=useState([])
    
    React.useEffect(()=>{
        fetch(url+'all')
            .then((res)=>res.json())
            .then((json)=>getData(json))   
            .catch(getData("enter a valid url"))
    },[])          

    return (
        <div className="home">
            <div className="space"></div>
            <div className="header">
                <img src={front} className='img'></img>
                <div className="text">
                <p className="h1"> Reach your fitness goals with <span className='grad'>Youfit</span></p>
                </div>
            </div> 
            <div className="seconds">
                <div className="left">
                    <p>¨Our growing softness, our increasing lack of physical fitness, is a menace to our security.¨</p>
                    <p>— John F. Kennedy</p>
                </div>
                <div className="right">
                    <img src={Work}></img>
                </div>
            </div>
            <br></br>
            <h1 className="work">Workouts</h1>
            <div className="total">
                {(data.length===10)?(data.map((input,index)=>(
                    <Link to={{pathname:'/each/'+index, state:{data:input} }} className='m-auto' style={{ textDecoration: 'none' }}>
                        <div className="each" key={index} onClick={()=>{props.data(index)}}>
                            <img src={input.image}></img>
                            <div>{input.bodyPart}</div>   
                        </div>
                    </Link>
                ))):null}    
            </div>
            
        </div>
    )
}

export default Home
