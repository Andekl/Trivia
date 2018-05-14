import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Highscore } from './components/Highscore';
import { AddQuestion } from './components/AddQuestion';

export const routes = <Layout>
	<Route exact path='/' component={Home} />
	<Route path='/counter' component={Counter} />
	<Route path='/fetchdata' component={FetchData} />
	<Route path='/highscore' component={Highscore} />
	<Route path='/addQuestion' component={AddQuestion} />
</Layout>;
