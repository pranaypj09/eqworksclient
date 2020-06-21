import React, {Component} from 'react';
import DataTableComponent from './DataTableComponent'
import "./../Header.css"


class DataTable extends Component {

    constructor(props) {
        super(props);

        this.state = { apiResponse: null};
    }
    
    renderMyData(){
      
        fetch('http://localhost:5555/stats/daily')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ apiResponse : responseJson })
            });
    }
    componentDidMount (){
        this.renderMyData();   
    }
    
  render(){
   
    return(
        <div className='dataTable-marginLeft'>
            {   this.state.apiResponse ? <DataTableComponent data={this.state.apiResponse} /> : null }
            
        </div>
    );
  }
}


export default DataTable;
