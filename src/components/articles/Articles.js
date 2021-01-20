import React, {useState } from 'react';

import './Articles.scss'

const Articles = (props) =>{
    const data = props.data;

    const [ commentsVisible , setCommentsVisible] = useState(false);
    const [ overflowHide , setOverflowHide] = useState(true)
;

    return(
        <>
          <article key={data.id} className="articles">
         
         <div className="user-container">
                  <img src={data.userImg} alt="user-Img" />
           <span>{data.userName}</span>
         </div>
        
    
         <div onClick={()=>props.clickHandler(data)} className="image-container">
             <img alt="product-img" src={data.productImg} />
             <div className="meta-wrapper">
    
                 <div className="meta-data">
                     <p>{data.title}</p>
                     <p className="price">{data.price}</p> 
                 </div>
    
                 <div>
                     {!data.fav ?
                         <svg aria-label="Like" className="heart-icon" fill="#fff" height="50" viewBox="0 0 48 48" width="24">
                         <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                         </path>
                         </svg> 
                        :
                        <svg className="heart-icon" fill="black" stroke="#000" height="50" width="50" viewBox="0 0 48 48">
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg> 
                     }

                 </div>
             </div>
    
         </div>
    
         <div className="icon-container">
             <svg className="like-icon" fill="#4e5ccc" height="50" width="30" viewBox="0 0 48 48">
                 <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
             </svg> 
    
             <span>{`${data.likes} likes`}</span>
    
           
         </div>
    
         <div className="description-container">
    
           <p onClick ={()=> setOverflowHide(!overflowHide)} className={ overflowHide ?'description overflow-hide':'description overflow-show'}>{data.description}</p>
    
             <div className="hastag-wrapper">
             { data.hastags.map( (hastag , index) =>{
                 return(
                     <p className="hastags" key={`hastag-${index}`}>{`#${hastag}`}</p>
                 )  
                     })
             }
    
          </div>
    
          <div className="comment-wrapper">
    
              <p onClick={ ()=> setCommentsVisible(!commentsVisible) }>{ !commentsVisible? 'View ' : 'Hide ' }{ `${data.comments.length} comments`}</p>
             { data.comments.map( ( comment , i) =>{
                 return(
    
                  <p className={commentsVisible ? "load-comments" : 'comments'}  key={i}>{comment}</p>
                  )
                 })
           }
            </div>
         </div>
        </article>
        
        
        </>
    )
}

export default Articles;