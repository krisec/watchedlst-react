import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    state = {
        loggedIn: false
    }

    signout(e:any, object: this) {
        //fetch('/.auth/logout/');
        object.setState({ loggedIn: false });
    }

    signInWithGoogle(e:any, object: this) {
        //TODO: Research how to properly implement google login and validating the OAuth token
        //window.location.href = "https://watchedlst.azurewebsites.net/.auth/login/google/callback";
        object.setState({loggedIn:true})
    }

    checkUser() {
        //fetch('/.auth/me').then(response => console.log(response)).then(data => {
        //    //if (data['user_id'] === undefined) {
        //    //    this.setState({ loggedIn: false });
        //    //} else {
        //    //    this.setState({ loggedIn: true });
        //    //}
        //});
    }

    public render() {
        var navbar;
        this.checkUser();
        if (this.state.loggedIn) {
            navbar = <ul className='nav navbar-nav'>
                <li>
                    <a onClick={e => { this.signout(e, this) }}><span className="glyphicon glyphicon-log-out" />Sign out</a>
                </li>
                <li>
                    <NavLink to={'/'} exact activeClassName='active'>
                        <span className='glyphicon glyphicon-home'></span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/search'} activeClassName='active'>
                        <span className='glyphicon glyphicon-search'></span> Search Movies/series
                    </NavLink>
                </li>
            </ul>
        } else {
            navbar = <ul className='nav navbar-nav'>
                <li>
                    <a onClick={e=>this.signInWithGoogle(e, this)}><span className="glyphicon glyphicon-log-in" />Sign in with Google</a>
                </li>
                <li>
                    <NavLink to={'/'} exact activeClassName='active'>
                        <span className='glyphicon glyphicon-home'></span> Home
                   </NavLink>
                </li>
            </ul>
        }



        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>WatchedlstReact</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    {navbar}
                </div>
            </div>
        </div>;
    }
}
