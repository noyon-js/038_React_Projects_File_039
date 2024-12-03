import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Ragistration1 from './Registration_Form/Ragistration1'
// import Login1 from './Login_Form/Login1'
// import Contact1 from './Contact_Form/Contact1'
import Loading from './Loading....jsx/Loading...'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ragistration1 /> */}
    {/* <Login1 /> */}
    {/* <Contact1 /> */}
    <Loading />
  </StrictMode>,
)
