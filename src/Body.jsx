import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Body() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {     
        let blogs = await axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/blog");
        setBlogs(blogs.data);      
    }
    return (
        <>
          <div className="col-md-10 col-lg-8 col-xl-7">
                {/* <!-- Post preview--> */}
                <div className="post-preview">
                    {
                        blogs.map((blog) => {
                            return <>
                                <Link to={blog.id}>
                                    <h5 className="post-title">{blog.title}</h5>
                                    <h6 className="post-subtitle fs-5"><strong>{blog.description}</strong></h6>
                                </Link>
                                <p className="post-meta text-center fst-italic">
                                    Posted by
                                    &nbsp;&nbsp;<a href="#!"><strong>{blog.author}</strong></a>&nbsp;&nbsp;
                                    on &nbsp;{blog.createdAt}               
                                     </p>
                               
                                <hr className="my-4" />
                            </>
                        })
                    }
                </div>            
                <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
            </div>

        </>
    )
}

export default Body