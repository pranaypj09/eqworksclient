import React, {Component} from 'react';
import ChartDailyEvents from './ChartDailyEvents';
import ChartsHourlyEvents from './ChartsHourlyEvents';
import ChartsStatsDaily from './ChartsStatsDaily';
import ChartsHourlyStats from './ChartsHourlyStats';

export default class ChartComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { apiResponse: null, chartType: this.props.chartInputType,
            
            isHourly: String(this.props.chartInputType).includes("daily") ? false : true,
            isEvents: String(this.props.chartInputType).includes("stats") ? false : true,
        };
    }
    
    renderMyData(){
      
        fetch('https://pranaypj09-wsproduct.glitch.me/'+this.state.chartType)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ apiResponse : responseJson })
            });
    }
    componentWillMount (){
        this.renderMyData();   
    }
    
  render(){
   
    return(
        <div>
            
            {   this.state.apiResponse ? (
                this.state.isHourly ?  
                    (this.state.isEvents ? <ChartsHourlyEvents apiData={this.state.apiResponse} /> : 
                        <ChartsHourlyStats apiData={this.state.apiResponse} />) : 
                    (this.state.isEvents ? <ChartDailyEvents chartData={this.state.apiResponse} /> :
                         <ChartsStatsDaily  apiData={this.state.apiResponse}/>)
                
                ) : null }
            
           
          
        </div>
    );
  }
}
