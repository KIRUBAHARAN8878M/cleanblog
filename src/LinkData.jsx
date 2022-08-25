import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function LinkData() {
    const params = useParams();
    const[blogData,setBlogData]=useState({})
    useEffect(()=>{
      loadUser()
    },[])
    let loadUser = async () => {
      try{
        let blog = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/blog/${params.id}`)
        setBlogData(blog.data)
      } catch(error){
        console.log(error)
      }
     
    }



  return (
    <>
          <header className="masthead" style= {{backgroundImage : `url('./assets/img/post-bg.jpg')`}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h3 className="fs-2">{blogData.title}</h3>
                            <span className="subheading fst-italic"><h6>{blogData.description}</h6></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-8 col-xl-7">
                {/* <!-- Post preview--> */}
                <div className="post-preview  fs-5 fst-bolder">
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {blogData.content}
                </div>
               
                <p className="post-meta text-end fst-italic">
                                    Posted by
                                    &nbsp;&nbsp;<a href="#!"><strong>{blogData.author}</strong></a>&nbsp;&nbsp;
                                    on &nbsp;{blogData.createdAt}               
                </p>
                {/* <!-- Divider--> */}
                <hr className="my-4" />

            </div>

      </div>
    </div>
    </>
  )
}

export default LinkData