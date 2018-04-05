import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    state = {
        loggedIn: false
    }

    signout() {
        fetch('/.auth/logout/');
        this.setState({ loggedIn: false });
    }

    signInWithGoogle() {
        window.location.href = "https://watchedlst.azurewebsites.net/.auth/login/google/callback";
    }

    checkUser() {
        fetch('/.auth/me').then(response => response.json()).then(data => {
            if (data['user_id'] === undefined) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            }
        });
    }

    public render() {
        var navbar;
        this.checkUser();
        if (this.state.loggedIn) {
            navbar = <ul className='nav navbar-nav'>
                <li>
                    <a onClick={this.signout}><span className="glyphicon glyphicon-log-out" />Sign out</a>
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
                    <a onClick={this.signInWithGoogle}><span className="glyphicon glyphicon-log-in" />Sign in with Google</a>
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
