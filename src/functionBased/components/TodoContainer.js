import {NavLink as Link, Route, Routes} from "react-router-dom";
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import MyTodos from "../pages/MyTodos";
import AboutAuthor from "../pages/AboutAuthor";
import AboutApp from "../pages/AboutApp";
//import {v4 as uuidv4} from "uuid";

const TodoContainer = (props) => {
       
      return (
        <><div>
          <nav>
            <ul>
              <li>
                <Link to="/" activeclassname="active">Home</Link>
              </li>
              <li>
                <Link to="About" activeclassname="active">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
            
            <Routes>
              <Route path="/" element={<MyTodos />}></Route>
              <Route path="/about" element={<About />} component={About}></Route>
              <Route path="/about/*" element={<About />} component={About}></Route>
              <Route path="/about/Author" element={<AboutAuthor />} component={AboutAuthor}></Route>
              <Route path="/about/AboutApp" element={<AboutApp />} component={AboutApp}></Route>
              <Route path="*" element={<NotMatch />}></Route>
            </Routes>


          </div></>
      )
}

// export const Home = () => {
//   return <div>You are at home page</div>
// }

// export const About = () => {
//   return <div>You are at About page</div>
// }

// export const NotMatch = () => {
//   return <div>YThis is a 404 page</div>
// }


export default TodoContainer