import React, { useState , useEffect} from 'react';
import './Favourites.scss';
import axios from 'axios';
import Articles from '../articles/Articles';


const Favourites = () =>{
  
    const [favouriteData , setFavouriteData]= useState();
    const[ stateChangedCounter, setStateChangedCounter] = useState(0);

        const fetchData=()=>{
            (async () => {
            const response = await axios.get('http://localhost:8000/favourites');
            setFavouriteData(response.data);
            })();
        }


       const deleteFavouriteData = (data) => {
           let id= data.id;
      
        let url = `http://localhost:8000/favourites/${id}`;
         axios.delete(url);
         setStateChangedCounter(stateChangedCounter + 1)
          
         };

         useEffect(() => {
            fetchData()
        },[stateChangedCounter]);

    return (
       
      <div className="favourite-page">
         
         { favouriteData && Object.values(favouriteData).map( (data , index)=>{
                return(
                 <Articles key={`article-${index}`} data={data} clickHandler={deleteFavouriteData}/>
                  
             )})
            
            }

      </div>
)
}

export default Favourites;