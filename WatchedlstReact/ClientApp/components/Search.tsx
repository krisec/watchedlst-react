import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { MovieEntity } from './MovieEntity';
import { Dialog } from "./elements/dialog";


const card: any = {
    width: "50px",
    height: "75px"
}


export class Search extends React.Component<RouteComponentProps<any>> {
    state = {
        results: [],
        searchValue: "",
        dialogActive: true
    };

    openDialog() {
         
    }

    constructor(props: any) {
        super(props);
        //this.searchButtonOnClick = this.searchButtonOnClick.bind(this);
        //this.searchBarOnKeyPressed = this.searchBarOnKeyPressed.bind(this);
    }

    componentWillMount() {
        let query = this.props.location.search;
        try {

            query = query.split('=')[1];
        } catch (err) {
            query = '';
        }
        //console.log(query);
        (query != null && query != '') && this.searchMovie(query);
    }

    searchMovie(query: string) {
        if (query === '')
            return;
        this.props.history.push({ pathname: '/search', search: 'q=' + query });
        //console.log(this.props.location.pathname);
        fetch("api/EntityData/MovieJSONBySearch/" + query).then(response => response.json()).then(data => {
            //console.log(data);
            if (data.Response == "False") {
                alert("Sorry, we could not find any results of " + query);
                return;
            }
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

    closeDialog(object:this) {
        object.setState({ dialogActive: false });
    }

    public render() {
        const { results } = this.state;

        var elements: React.ReactNode[] = results.map(function (value: any, index: any) {

            return <Link className='black-link' key={index} to={"/entity/" + value.imdbToken}>
                <div className="card">
                    <img className="card-image" src={value.poster} />
                    <p className="card-header"> {value.title} ({value.year})</p>
                    <p className="card-text"> Type: {value.type} </p>
                    <Route path='/entity/:id' component={MovieEntity} />
                </div>
            </Link>
        })

        return <div>
            <div className="header-bar">
                <input type='text' className="search-bar-input" onKeyUp={e => this.searchBarOnKeyPressed(e, this)} onChange={e => this.setState({ searchValue: e.currentTarget.value })} />
                <button className="search-bar-button" onClick={e => this.searchButtonOnClick(e, this)}>Search</button>
            </div>
            <div>
                <button onClick={e => this.setState({ dialogActive: true })}>Open Dialog</button>
                {elements}
            </div>
            <Dialog isActive={this.state.dialogActive} onClick={this.closeDialog} parent={this}>
                <p>Do you like dialogs?</p>
                <input />
            </Dialog>
        </div>;
    }
}