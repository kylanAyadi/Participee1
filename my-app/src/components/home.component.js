import React, { Component } from 'react';
import { moviesPromise } from '../movies';
import Card from './cards.components/card.component';

//import Pagination from "react-js-pagination"
import ReactPaginate from 'react-paginate';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: '',
            activePage: 1

        };

        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    handleClickDelete(my_delete_card) {
        let index = this.state.movies.indexOf(my_delete_card);
        let slice = this.state.movies;

        slice.splice(index, 1);
        console.log("new slice", slice);
        console.log("DELETE: ", my_delete_card);

        this.setState({ movies: slice });
        console.log("new movies:", this.state.movies);
    }

    updateSearch(e) {
        this.setState({ search: e.target.value.substr(0, 20) });
    }

    showCards() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.category.indexOf(this.state.search) !== -1 ||movie.title.indexOf(this.state.search) !== -1;
            });
        return filteredMovies.map((currentMovie, i) => {

            return <Card movie={currentMovie} key={i} delete_func={this.handleClickDelete} />
        });

    }

    componentDidMount() {
        moviesPromise
            .then(res => {

                localStorage.setItem('session', JSON.stringify(res));
                let my_storage = localStorage.session;
                let movies = JSON.parse(my_storage);
                this.setState({ movies: movies });

            });
    }

    render() {

        return (
            <div className="container-fluid" >
                <div className="col-4" style={{ marginBottom: "3%", marginInline: "auto" }}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Search by category or title" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
                </div>
                <div className="row">
                    {this.showCards()}
                </div>
                {/* <div>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'row'}
                        pageCount={3}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        
                        containerClassName={'row'}
                        
                        activeClassName={'active'}
                    />
                </div> */}
            </div>
        )
    }
}