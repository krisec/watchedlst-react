import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ReactNode } from 'react';
import { Link, Route } from 'react-router-dom';
import { MovieEntity } from './MovieEntity';


const card: any = {
    width: "50px",
    height: "75px"
}


export class Search extends React.Component<RouteComponentProps<any>> {
    state = {
        results: [],
        searchValue: "",
        loading: true
    };



    constructor(props: any) {
        super(props);
        //this.searchButtonOnClick = this.searchButtonOnClick.bind(this);
        //this.searchBarOnKeyPressed = this.searchBarOnKeyPressed.bind(this);
    }

    searchMovie(query:string) {
        fetch("api/EntityData/MovieJSONBySearch/" + query).then(response => response.json()).then(data => {
            //console.log(data);
            let results = data["Search"].map((r: any, index: number) => {
                return { title: r["Title"], poster: r["Poster"], imdbToken: r["imdbID"], year: r["Year"], type: r["Type"] }
            })
            this.setState({ results: results })
            //this.setState({ data: data, loading: false, title: data["Title"], year: data["Year"], desc: data["Plot"], imageSrc: data["Poster"] });
        });
    }

    searchButtonOnClick(e: any, object: Search) {
        object.searchMovie(object.state.searchValue);
    }
    searchBarOnKeyPressed(e: any, object: Search) {
        if (e.keyCode == 13) {
            object.searchMovie(object.state.searchValue);
        }
    }

    public render() {
        const { results } = this.state;

        var elements: ReactNode[] = results.map(function (value: any) {

            return <Link className='black-link' to={"/entity/" + value.imdbToken}>
                <div className="card">
                    <img className="card-image" src={value.poster} />
                    <p className="card-header"> {value.title} ({value.year})</p>
                    <p className="card-text"> Type: {value.type} </p>
                    <Route path='/entity/:id' component={MovieEntity} />
                </div>
            </Link>
        })

        return <div>
            <div className="search-bar">
                <input type='text' className="search-bar-input" onKeyUp={e => this.searchBarOnKeyPressed(e, this)} onChange={e => this.setState({ searchValue: e.currentTarget.value })} />
                <button onClick={e => this.searchButtonOnClick(e, this)}>Search</button>
            </div>
            <div>
            {elements}
            </div>

        </div>;
    }
}