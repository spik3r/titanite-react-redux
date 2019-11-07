import React from 'react';
import './App.css';
import {simulateError, loadPostsRequest} from "./actions/actions"
import {connect} from 'react-redux';
import LoadingSpinner from "./components/LoadingSpinner";
// import { Router, Link, Route} from 'react-router-dom';
import { HashRouter as Router, Link, Route} from 'react-router-dom';
import history from "./navigation/history";
import Home from "./screens/home";
import Guides from "./screens/guides";
import Indicators from "./screens/indicators";
import Referrals from "./screens/referrals";
import Contact from "./screens/contact";
import Charts from "./screens/charts";

//Todo: maybe look at making this a functional component instead
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    doRequest = () => {
        this.props.loadPostsRequest();
    };

    simulateError = () => {
        this.props.simulateError();
    };

    render() {
        const {posts, isLoading, showError} = this.props;
        console.log('props', this.props);
        console.log('posts', posts);
        console.log('isLoading', isLoading);
        console.log('showError', showError);
        return (
            <div className="App">
                <Router basename="/" history={history}>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/indicators" component={Indicators} />
                    <Route path="/guides" component={Guides} />
                    <Route path="/support-us" component={Referrals} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/charts" component={Charts} />
                    <Route path="/loading" component={LoadingSpinner} />
                </Router>
                {/*<div className="App-header">*/}
                {/*    <p>Redux Saga Starter</p>*/}
                {/*    <button onClick={this.doRequest}>Call Api</button>*/}
                {/*    <button onClick={this.simulateError}>Simulate Error</button>*/}
                {/*    {isLoading ? <LoadingSpinner/> : <p>not loading</p>}*/}
                {/*    {showError && <div className='error-circle'>*/}
                {/*        <div>X</div>*/}
                {/*    </div>}*/}
                {/*    <PostList posts={posts}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

const mapDispatchToProps = {
    loadPostsRequest,
    simulateError
};

export const mapStateToProps = (state, props) => {
    return {
        posts: state.postsReducer.posts,
        isLoading: state.postsReducer.isLoading,
        showError: state.postsReducer.showError
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
