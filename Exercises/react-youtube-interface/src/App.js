import React, {Component} from 'react';

import './App.css';
import Header from './Component/Header';
import MainVideo from './Component/Videos';
import UpNext from './Component/UpNext';
import SmallVideos from './Component/SmallVideos';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div>
        <Header/>
        <MainVideo/>
        <UpNext/>
        <SmallVideos/>
        </div>
        );
    }
} 

export default App;