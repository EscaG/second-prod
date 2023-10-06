import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';



function App() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={ classNames('app', {}, [theme]) }>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync/>}/>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    
    </div>
  );
}

export default App;