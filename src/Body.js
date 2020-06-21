import React,{Component} from "react";
import ChartComponent from './charts/ChartComponent';
import DataTable from './datatables/DataTable';
import ShelterMap from './geov/GeoComponent';
import "./Header.css"

export default class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showChart: false,
          showDataTable: false,
          showGoi: false,
          chartDailyEvents: false,
          chartHourlyEvants: false,
          chartDailyStats: false,
          chartHourlyStats: false,
          
          
        };
        this._onChartDailyEvents = this._onChartDailyEvents.bind(this);
        this._onChartHourlyEvents = this._onChartHourlyEvents.bind(this);
        this._onChartDailyStats = this._onChartDailyStats.bind(this);
        this._onChartHourlyStats = this._onChartHourlyStats.bind(this);
        this._onDataTableClick = this._onDataTableClick.bind(this);
        this._onGoiTableClick = this._onGoiTableClick.bind(this);
      }
    
      _onChartDailyEvents() {
        this.setState({showChart: true, showDataTable: false,showGoi: false, 
            chartDailyEvents: true, chartHourlyEvants: false, chartDailyStats: false, chartHourlyStats: false});
      }

      _onChartHourlyEvents() {
        this.setState({showChart: true, showDataTable: false,showGoi: false,
            chartDailyEvents: false, chartHourlyEvants: true, chartDailyStats: false, chartHourlyStats: false});
      }

      _onChartDailyStats() {
        this.setState({showChart: true, showDataTable: false,showGoi: false,
            chartDailyEvents: false, chartHourlyEvants: false, chartDailyStats: true, chartHourlyStats: false});

      }

      _onChartHourlyStats() {
        this.setState({showChart: true, showDataTable: false,showGoi: false,
            chartDailyEvents: false, chartHourlyEvants: false, chartDailyStats: false, chartHourlyStats: true});

      }

      _onDataTableClick() {
        this.setState({showChart: false, showDataTable: true,showGoi: false, 
            chartDailyEvents: false, chartHourlyEvants: false, chartDailyStats: false, chartHourlyStats: false});
      }

      _onGoiTableClick() {
        
        this.setState({showChart: false, showDataTable: false,showGoi: true, 
            chartDailyEvents: false, chartHourlyEvants: false, chartDailyStats: false, chartHourlyStats: false});
      }

    render() {

        return(
        <div className="component-body">
        <div className="component-body-left-pane">
        <div className="component-body-left"> 
            <div className="margin-body">
                <label className="label-out" >Chart visualizations</label><br></br><hr></hr>
                <div>
                    <label className="label-inner" onClick={this._onChartDailyEvents}>
                       Daily Events
                    </label><br></br>
                    <label className="label-inner" onClick={this._onChartHourlyEvents}>
                        Houly Events
                    </label><br></br>
                    <label className="label-inner"  onClick={this._onChartDailyStats}>
                        Daily Stats
                    </label><br></br>
                    <label className="label-inner"  onClick={this._onChartHourlyStats}>
                        Hourly Stats
                    </label><br></br>
                </div>
            </div>           
            <div className="margin-body">
                <label className="label-out" >Data visualizations</label><br></br><hr></hr>
                <div>
                    <label className="label-inner" onClick={this._onDataTableClick}>Daily Stats</label><br></br>
                </div>
            </div>
            <div className="margin-body"> 
                <label className="label-out" > Geo visualizations </label><br></br><hr></hr>
                <label className="label-inner"  onClick={this._onGoiTableClick}> Locations </label>
                
            </div>
        </div>
        </div>
        <div className="component-body-right">
            { this.state.chartDailyEvents ? <ChartComponent chartInputType="events/daily" /> : null }
            { this.state.chartHourlyEvants ? <ChartComponent chartInputType="events/hourly" /> : null }
            { this.state.chartDailyStats ? <ChartComponent chartInputType="stats/daily"  /> : null }
            { this.state.chartHourlyStats ? <ChartComponent chartInputType="stats/hourly"  /> : null }
            { this.state.showDataTable ? <DataTable /> : null }
            { this.state.showGoi ? <ShelterMap /> : null }

            
        </div>
        </div>

        );
    }
}