import React, { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated} from 'react-spring';
import {
    Home,
    GridLayout,
} from 'modules';

const Routes = () => {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: {opcaity: 0, transform: 'translate(100%, 0)'},
        enter: {opcaity: 1, transform: 'translate(0, 0)'},
        leave: {opacity: 0, transform: 'translate(-50%, 0)'}
    })

    return (
        transitions.map(({item, props, key}) => (
            <animated.div key={key} style={props}>
                <Switch location={item}>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/grid-layout' component={GridLayout} />
                </Switch>
            </animated.div>
        ))
    )
}

export default Routes;