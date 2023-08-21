import './Result.scss'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'

function Result() {

    const { data, setData } = useContext(DataContext)
    const [mobile, setMobile] = useState(false)

    function handleSystem(event) {
        event.target.value === 'metric' ?
            setData({ ...data, type: true })
            :
            setData({ ...data, type: false })
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    })

    return (
        <>
            {
                data.info ?
                    <div id='result-container' className='inner-containers'>
                        <div id='top-details-container'>
                            <select id="system-select" onChange={handleSystem}>
                                <option selected disabled>Units</option>
                                <option value={'metric'}>Metric</option>
                                <option value={'imperial'}>Imperial</option>
                            </select>
                            <div>
                                <div className='bold-details'>{data.info?.location.name}</div>
                                <div>{data.info?.location.country}</div>
                            </div>
                            <div id='degree'>{data.type ? `${Math.round(data.info?.current.temp_c)}°` : `${Math.round(data.info?.current.temp_f)}°F`}</div>
                        </div>
                        <div id='bottom-details-container'>
                            <div className='details-flexers'>
                                <div>Precipitation</div>
                                <div className='bold-details'>{data.type ? `${Math.round(data.info?.current.precip_mm)} mm` : `${Math.round(data.info?.current.precip_in)} in`}</div>
                            </div>
                            <div className='details-flexers'>
                                <div>Humidity</div>
                                <div className='bold-details'>{data.info?.current.humidity}%</div>
                            </div>
                            <div className='details-flexers'>
                                <div>Wind</div>
                                <div className='bold-details'>{data.type ? `${Math.round(data.info?.current.wind_kph)} km/h` : `${Math.round(data.info?.current.wind_mph)} mi/h`}</div>
                            </div>

                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default Result