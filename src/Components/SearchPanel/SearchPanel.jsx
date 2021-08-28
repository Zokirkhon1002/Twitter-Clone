import React from 'react';
import './SearchPanel.css';


export default class SearchPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e){
        const inputValue = e.target.value.toLowerCase();
        this.setState({inputValue});
        this.props.onUpdateSearch(inputValue) // onUpdateSearch(e) bu funksiyaga umuman aloqasi yo'q
    }

    render() {
        return (
            <input 
            type="text" 
            className="form-control search-input"
            placeholder="Search by posts"
            onChange={this.onUpdateSearch}
            />
        )
    }
}
