import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Dialog extends React.Component<any, RouteComponentProps<any>>{
    constructor(props: any) {
        super(props);
    }

    disrupted = false;

    close(e: any, object: any) {
        console.log(e.currentTarget.className);
        if (e.currentTarget.className === "dialog" && !object.disrupted) {
            object.props.onClick(object.props.parent)
        }
        object.disrupted = false;
    }

    disrupt(e:any, object:this) {
        console.log('This disrupt happens!');
        object.disrupted = true;
        return;
    }

    public render() {
        return <div className={this.props.isActive ? 'dialog' : 'dialog-inactive'} onClick={e => this.close(e, this)}>
            <div className='dialog-content' onClick={e=>this.disrupt(e, this)} >
                {this.props.children}
            </div>
        </div>
    }
}