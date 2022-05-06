import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {styled, ThemeProvider} from "@mui/material/styles";
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Layout from './com/Container';
import Index from './layouts/Index';

import About from './layouts/About';
import Explore from './layouts/Explore';

import EccoSprites from './layouts/EccoSprites';
import EccoSonarMaps from './layouts/EccoSonarMaps';
import EccoLevelMaps from './layouts/EccoLevelMaps';
import Ecco2Sprites from './layouts/Ecco2Sprites';
import Ecco2SonarMaps from './layouts/Ecco2SonarMaps';
import Ecco2LevelMaps from './layouts/Ecco2LevelMaps';
import Ecco2ObjectMaps from './layouts/Ecco2ObjectMaps';
import EccoPCSprites from './layouts/EccoPCSprites';
import EccoPCLevelMaps from './layouts/EccoPCLevelMaps';
import EccoJrLevelMaps from './layouts/EccoJrLevelMaps';

import DQP2022110 from './articles/dqp-2022-1-10';
import HTY2021114 from './articles/hty-2021-11-14';
import JGJ202188 from './articles/jgj-2021-8-8';
import EMP20201221 from './articles/emp-2020-12-21';
import HTM20201113 from './articles/htm-2020-11-13';
import EDP20201110 from './articles/edp-2020-11-10';
import HOY2020119 from './articles/hoy-2020-11-9';

import {
  t_instance,
  t_controller,
  Context,
  DefaultProps  
} from './lib/Toolbox';

import theme from './theme';
import config from './config';

const instance = new t_instance;

ReactDOM.render(
  <React.StrictMode>
  <Context.Provider value={instance}>
  <ThemeProvider theme={theme}>
  <CssBaseline />

  <BrowserRouter>
    <Routes>
      <Route path={config.PUBLIC_ROOT} element={<Index />} />
      <Route path={config.PUBLIC_ROOT + 'about'} element={<About />} />
      <Route path={config.PUBLIC_ROOT + 'explore'} element={<Explore />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-the-dolphin/sprites'} element={<EccoSprites />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-the-dolphin/sonar-maps'} element={<EccoSonarMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-the-dolphin/level-maps'} element={<EccoLevelMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-the-dolphin-pc/sprites'} element={<EccoPCSprites />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-the-dolphin-pc/level-maps'} element={<EccoPCLevelMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-the-dolphin-pc/level-maps'} element={<EccoPCLevelMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-2-the-tides-of-time/sprites'} element={<Ecco2Sprites />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-2-the-tides-of-time/sonar-maps'} element={<Ecco2SonarMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-2-the-tides-of-time/level-maps'} element={<Ecco2LevelMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-2-the-tides-of-time/object-maps'} element={<Ecco2ObjectMaps />} />
      <Route path={config.PUBLIC_ROOT + 'ecco-jr/level-maps'} element={<EccoJrLevelMaps />} />

      <Route path={config.PUBLIC_ROOT + '2022/1/10'} element={<DQP2022110 />} />
      <Route path={config.PUBLIC_ROOT + '2021/11/14'} element={<HTY2021114 />} />
      <Route path={config.PUBLIC_ROOT + '2021/8/8'} element={<JGJ202188 />} />
      <Route path={config.PUBLIC_ROOT + '2020/12/21'} element={<EMP20201221 />} />
      <Route path={config.PUBLIC_ROOT + '2020/11/13'} element={<HTM20201113 />} />
      <Route path={config.PUBLIC_ROOT + '2020/11/10'} element={<EDP20201110 />} />
      <Route path={config.PUBLIC_ROOT + '2020/11/9'} element={<HOY2020119 />} />
    </Routes>
  </BrowserRouter>

  </ThemeProvider>
  </Context.Provider>
  </React.StrictMode>
,
document.getElementById('root')
);
