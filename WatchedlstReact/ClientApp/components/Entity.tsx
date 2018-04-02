import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface EntityMatch {

}

export class Entity extends React.Component<RouteComponentProps<any>> {
    state = {
        imdbdata: "",
        title: "loading...",
        year: "",
        desc: "loading...",
        imageSrc: "",
        data: String,
        loading: true
    };



    constructor(props:any) {
        super(props);
    }




    public componentWillMount() {
        var id = this.props.match.params.id;
        fetch("api/EntityData/MovieJSONById/" + id).then(response => response.json()).then(data => {
            this.setState({ data: data, loading: false, title: data["Title"], year: data["Year"], desc: data["Plot"], imageSrc: data["Poster"] });
        });
    }


    public render() {
        const { title, year, desc, imageSrc } = this.state;
        return <div>
            <h1><
                img src={imageSrc} />
                {title} ({year})
            <button>&#10003;</button>
                <button>&#10060;</button>
            </h1>

            <p>{desc}</p>


        </div>;
    }
}