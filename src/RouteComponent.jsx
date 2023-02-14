import React from 'react'
import {Routes,Route} from 'react-router-dom';
import PageNotFound from './CommonComponent/Pagenotfound'
import loader from "./assets/image/react.svg"
const Home = React.lazy(()=>import('./Pages/Home'))
const About = React.lazy(()=>import('./Pages/About'))
const Learn = React.lazy(()=>import('./Pages/Learn'))
const Login = React.lazy(()=>import('./Pages/Login'))
const Register = React.lazy(()=>import('./Pages/Register'))
// import DetailCategory from './CommonComponent/DetailCategory';
// import Signup from './Pages/Signup';
// import Signin from './Pages/Signin';const LazyLoading = React.lazy(()=>import('./Loading'))
// const Shop = React.lazy(()=>import('./Pages/Shop'))
// const Contact = React.lazy(()=>import('./Pages/Contact'))

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<React.Suspense fallback={<img src={loader}/>}><Home/></React.Suspense>} />
            <Route path="/about" element={<React.Suspense fallback={<img src={loader}/>}><About/></React.Suspense>} />
            <Route path="/learn" element={<React.Suspense fallback={<img src={loader}/>}><Learn/></React.Suspense>} />
            <Route path="/login" element={<React.Suspense fallback={<img src={loader}/>}><Login/></React.Suspense>} />
            <Route path="/register" element={<React.Suspense fallback={<img src={loader}/>}><Register/></React.Suspense>} />
            <Route path="*" element={<React.Suspense fallback={<img src={loader}/>}><PageNotFound/></React.Suspense>} />
            {/* <Route path="shop" element={<React.Suspense fallback={<img src={loader}/>}><Shop/></React.Suspense>} />
            <Route path="contact" element={<React.Suspense fallback={<img src={loader}/>}><Contact/></React.Suspense>} />
            <Route path="signup" element={<React.Suspense fallback={<img src={loader}/>}><Signup/></React.Suspense>} />
            <Route path="signin" element={<React.Suspense fallback={<img src={loader}/>}><Signin/></React.Suspense>} /> */}
            {/* <Route path="order-summery" element={<OrderSummery/>} />
            <Route path="products" element={<Products/>}>
            <Route index element={<FeatureProduct/>}/>
                <Route path='featureproduct' element={<FeatureProduct/>}/>
                <Route path='newproduct' element={<NewProduct/>}/>
            </Route>*/}
            {/* <Route path='category/:category' element={<DetailCategory/>}/> */}
        </Routes>
    )
}

export default RouteComponent