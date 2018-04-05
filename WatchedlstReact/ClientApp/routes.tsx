import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { MovieEntity } from './components/MovieEntity';
import { Search } from './components/Search';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/entity/:id' component={MovieEntity} />
    <Route path='/search' component={Search} />
</Layout>;
