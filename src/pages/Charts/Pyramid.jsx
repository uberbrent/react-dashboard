import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, 
        Inject, PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel, AccumulationSelection } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { PyramidData  } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const ColorMapping = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Pyramid" title="Food Comparison Chart" />
            <div className="w-full">
                <AccumulationChartComponent
                    id="pyramid-chart"
                    height="420px"
                    legendSettings={{ mode: 'Range', background: 'white' }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective 
                            dataSource={PyramidData}
                            name="Food"
                            xName="x"
                            yName="y"
                            type="Pyramid"
                            width="45%"
                            height="80%"
                            neckWidth="15%"
                            gapRatio={0.03}
                            explodeemptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                            dataLabel={{
                                visible: true,
                                position: 'Inside',
                                name: 'text'
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    )
}

export default ColorMapping
