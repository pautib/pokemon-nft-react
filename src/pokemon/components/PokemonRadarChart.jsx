import { PropTypes } from "prop-types";
import Chart from "react-apexcharts";

export const PokemonRadarChart = ({ stats, chartHeight, chartName, showTitle = true, maxStatValue }) => {
    
    const state = {
        series: [{
            name: chartName || 'Stats',
            data: [stats.hp, stats.atk, stats.def, stats.speed, stats.defSp, stats.atkSp],
        }],
        options: {
          chart: {
            type: 'radar',
            toolbar: {
              show: false
            }
          },
          title: {
            text: chartName,
            align: 'center',
            offsetY: 10,
            show: showTitle,
            floating: true,
            style: {
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#263238'
            }
          },
          yaxis: {
            stepSize: 20,
            show: false,
            min: 0,
            max: maxStatValue || 100
          },
          xaxis: {
            categories: ['Hp', 'Atk', 'Def', 'Speed', 'DefSp', 'AtkSp']
          },
          colors:['#f2c304'],
          markers: {
            colors: ['#3c5aa6']
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ['#3c5aa6']
            }
          },
          plotOptions: {
            radar: {
              polygons: {
                strokeColor: '#e8e8e8',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
              }
            }
          }
        },
    };

    return (
      <div>
        <div id="chart">
            <Chart options={state.options} series={state.series} type="radar" height={ chartHeight } />
        </div>
        <div id="html-dist"></div>
      </div>
    );
}

PokemonRadarChart.propTypes = {
    stats: PropTypes.object,
    chartHeight: PropTypes.number,
    chartName: PropTypes.string,
    showTitle: PropTypes.bool,
    maxStatValue: PropTypes.number
};
