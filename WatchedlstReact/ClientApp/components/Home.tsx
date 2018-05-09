import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    private signInDown(e: any) {
        e.currentTarget.src = "../web/1x/btn_google_signin_light_pressed_web.png";
    }

    private signIn(e: any) {
        console.log("Not yet implemented");
    }

    private signInUp(e: any) {
        e.currentTarget.src = "../web/1x/btn_google_signin_light_normal_web.png";
    }

    private signInFocus(e: any) {
        e.currentTarget.src = "../web/1x/btn_google_signin_light_focus_web.png";
    }

    private signInBlur(e: any) {
        e.currentTarget.src = "../web/1x/btn_google_signin_light_normal_web.png";
    }


    public render() {
        return <div>
            <h1>Welocme to WatchedLst!</h1>
                <p>Watchedlst aims to fix the problem of movie recommendatilns by allowing you to lists over movies you recommend!<br />
                If you want to start recommending movies, why not sign in with Google, and start creating your lists today!</p>
            <img src="../web/1x/btn_google_signin_light_normal_web.png" alt="Login with google" onClick={this.signIn} onMouseDown={this.signInDown} onMouseUp={this.signInUp} onFocus={this.signInFocus} onBlur={this.signInBlur} />
            
        </div>;
    }
}
