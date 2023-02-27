import React,{ useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import Header from '../CommonComponent/Header'
import Footer from '../commoncomponent/Footer'
import ArrowRight from "../assets/image/arrow-right.svg"
import blogService from '../services/blog.service'
const Blog = () => {
    let { id } = useParams();
    const [nexttitle, setNextTitle] = useState("");
    const [blogslist, setblogslist] = useState([]);
    const [blog, setblog] = useState([]);

    useEffect(() => {
        blogService.getBlogs({id:id}).then((response) => {
            console.log(response)
            setblogslist(response.data.titles);
            setblog(response.data.blog);
            if(parseInt(id)==response.data.length){
                setNextTitle(response.data.titles[parseInt(id)-2]);
            }else{
                setNextTitle(response.data.titles[parseInt(id)]);
            }
        }).catch((e) => {
            console.log(e.response.data.message)
        })
    }, [id]);
    return (
        <>
            <Header/>
            <main className="main-bg-gradient">
                <div className="blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="blog-sidebar" >
                                    <div className="blog-sidebar-inner">
                                        <ul>
                                            {
                                                blogslist.map((list,i) =>
                                                    <li key={i}><Link className={++i==id?"active":""} to={`/blog/${i}`}> <span>1.{i}</span> {list} </Link></li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="currunt-blog">
                                    {id>1?<>
                                        <div className="d-flex">
                                            <div className="next-blog-label p-2">Previous Lesson</div>
                                            <div className="next-blog-label p-2">
                                                <Link to={`/blog/${parseInt(id)-1}`}>
                                                    <img src={ArrowRight} alt="arrow-right" style={{"transform":"rotate(180deg)"}}/>
                                                </Link>
                                            </div>
                                        </div>
                                    </>:<></>}
                                    <div className="currunt-blog-inner">
                                        <h2>{blog.title}</h2>
                                        <div className="currunt-blog-inner-image">
                                            <img src={blog.featureimg} alt="newsletter" />
                                        </div>
                                        <div className="blog-writter-section">
                                            <div className="blog-writter">
                                                <div className="blog-user-info">
                                                    <img src={blog.featureimg} alt="user" />
                                                    Admin
                                                </div>
                                                <div className="blog-date">
                                                {blog.createdAt}
                                                </div>
                                            </div>
                                            <div className="blog-para">
                                                <p>{blog.body}</p>
                                                    <div className="link-btn">
                                                        <a href="#" className="btn ">Load More</a>
                                                    </div>
                                            </div>
                                        </div>
                                        {blogslist.length!=id && <>
                                            <div className="next-blog">
                                                <div className="next-blog-left">
                                                    <div className="next-blog-label">Next Lesson</div>
                                                    <div className="next-blog-title"><Link to={`/blog/${blogslist.length==id && id>1?blogslist.length-1:parseInt(id) + 1}`}>{nexttitle}</Link></div>
                                                </div>
                                                <div className="next-blog-right">
                                                    <Link to={`/blog/${blogslist.length==id && id>1?blogslist.length-1:parseInt(id) + 1}`}>
                                                        {blogslist.length==id?<><img src={ArrowRight} alt="arrow-right" style={{"transform":"rotate(180deg)"}}/></>:<><img src={ArrowRight} alt="arrow-right" style={{"transform":"rotate(0deg)"}} /></>}
                                                    </Link>
                                                </div>
                                            </div>
                                        </>}
                                        {id > 1 &&<>
                                            <div className="d-flex mt-5">
                                                <div className="next-blog-label p-2">Previous Lesson</div>
                                                <div className="next-blog-label p-2">
                                                    <Link to={`/blog/${parseInt(id)-1}`}>
                                                        <img src={ArrowRight} alt="arrow-right" style={{"transform":"rotate(180deg)"}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Blog