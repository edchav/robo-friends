import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobotsReducer.searchField,
        robots: state.requestRobotsReducer.robots,
        isPending: state.requestRobotsReducer.isPending,
        error: state.requestRobotsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) // the same as requestRobots(dispatch) returns a function
    }
}

class App extends Component {
    // using redux, we don't need to manage state in this component
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         // searchfield: ''
    //     }
    // }

    // without redux, we would use componentDidMount to fetch data
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }));
    // }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }

    componentDidMount() {
        this.props.onRequestRobots();
    }
    
    render() {
        //const { robots, searchfield } = this.state;
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        // return !robots.length ?
        return isPending ?
        <h1>Loading</h1> :
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={ filteredRobots } />  
            </Scroll>
        </div>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);