import React, { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import {
    Home,
    GridLayout,
    Video,
    ImageCompare,
    ScrollAnimation,
    GsapAnimation,
    ScrollVideo,
    ReactUseGesture,
    SocketIo,
    FramerMotion,
} from 'modules';

const Routes = () => {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        // from: {opcaity: 0, transform: 'translate(100%, 0)'},
        // enter: {opcaity: 1, transform: 'translate(0, 0)'},
        // leave: {opacity: 0, transform: 'translate(-50%, 0)'}
        from: { opcaity: 0 },
        enter: { opcaity: 1 },
        leave: { opacity: 0 }
    })

    return (
        // transitions.map(({item, props, key}) => (
        // <animated.div key={key} style={props}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/grid-layout' component={GridLayout} />
            <Route exact path='/video' component={Video} />
            <Route exact path='/compare' component={ImageCompare} />
            <Route exact path='/scroll-animation' component={ScrollAnimation} />
            <Route exact path='/gsap' component={GsapAnimation} />
            <Route exact path='/scroll-video' component={ScrollVideo} />
            <Route exact path='/react-use-gesture' component={ReactUseGesture} />
            <Route exact path='/socket-io' component={SocketIo} />
            <Route exact path='/framer-motion' component={FramerMotion} />
        </Switch>
        // {/* </animated.div> */}
        // ))
    )
}

export default Routes;