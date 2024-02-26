import './App.css';
import Header from './Components/Header/Header';
import Exam from './Components/Exam/Exam';
import Contacts from './Components/Contacts/Contacts';
import TrialLesson from './Components/TrialLesson/TrialLesson';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';



function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/Exam" Component={Exam}/>
      <Route path="/Contacts" Component={Contacts}/>
      <Route path="/TrialLesson" Component={TrialLesson}/>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
