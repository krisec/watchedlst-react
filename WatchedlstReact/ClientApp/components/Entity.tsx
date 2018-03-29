import * as React from 'react';
import { RouteComponentProps } from 'react-router';



export class Entity extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {
            imdbdata: ""

        };
    }

    public onComponentWillMount() {
        
    }


    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            
        </div>;
    }
}
