import React, { useState , useEffect} from 'react';
import './Landing.scss';
import axios from 'axios';
import Articles from '../articles/Articles';


const Landing = () =>{
    const [landingData , setLandingData]= useState();
    const[ stateChangedCounter, setStateChangedCounter] = useState(0);
  
    const fetchData=()=>{
      (async () => {
        const response = await axios.get('http://localhost:8000/products');
       setLandingData(response.data);
       })();
    }
     useEffect(() => {
        fetchData();
       },[stateChangedCounter]);

       const postFavouriteData = (data ) => {
          axios.post('http://localhost:8000/favourites', {
                data
             });

           setStateChangedCounter(stateChangedCounter + 1)
   };
    
    return (
       
      <div className="landing-page">
         
         {landingData && Object.values(landingData).map( (data , index)=>{
                return(
                 <Articles key={`article-${index}`} data={data} clickHandler={postFavouriteData}/>
                  
             )})
            }
      </div>
)
}

export default Landing;