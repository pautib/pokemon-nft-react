import PropTypes from "prop-types";

import {BarChart} from "@mui/x-charts";
import {Box } from '@mui/material';

export const PokemonStatsChart = ({stats, maxValue = 500}) => {

    const chartSetting = {
        width: 500,
        height: 200,
    };

    const dataset = [
        {
            stat: stats[0],
            statName: 'HP',
        },
        {
            stat: stats[1],
            statName: 'Atk',
        },
        {
            stat: stats[2],
            statName: 'Def',
        },
        {
            stat: stats[3],
            statName: 'AtkSp',
        },
        {
            stat: stats[4],
            statName: 'DefSp',
        },
        {
            stat: stats[5],
            statName: 'Vel',
        }
    ];

    return (
        <Box sx={{ width: '100%'}}>
            <BarChart
                dataset={dataset}
                xAxis={[{min: 0, max: maxValue}]}
                yAxis={[{ scaleType: 'band', dataKey: 'statName' }]}
                series={[{ dataKey: 'stat' , color: '#f2c304'}]}
                layout="horizontal"
                
                {...chartSetting}
                slotProps={{
                    loadingOverlay: { message: 'Data should be available soon.' },
                    bar: {
                        clipPath: `inset(0px round 10px 10px 10px 10px)`,
                    },
                }}
            />

        </Box>

    );
};

PokemonStatsChart.propTypes = {
    stats: PropTypes.array,
    maxValue: PropTypes.number,
};
