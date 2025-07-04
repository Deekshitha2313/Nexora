import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about us';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTest from './components/testimonials';
import AppPrice from './components/princing';
import AppBlog from './components/blog';
import AppContact from './components/contact us';
import AppFooter from './components/footer';

function App() {
  return (
   <div  className='App'>
     <header id='header'>
      <AppHeader/>
    </header>
    <main>
      <AppHero/>
      <AppAbout/>
      <AppServices/>
      <AppWorks/>
      <AppTeams/>
      <AppTest/>
      <AppPrice/>
      <AppBlog/>
      <AppContact/>
      <AppFooter/>
   </main>
   </div> 
   
   
  );
}

export default App;
