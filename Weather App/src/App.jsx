import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import {useState,useEffect} from 'react'
import {weatherCodeMapping} from './weatherCodeMapping'

export default function App() {
    const [weather,setWeather]=useState(null)
    const [coords, setCoords] = useState({
        latitude: 0,longitude: 0
        })

    const apiReq=async ()=>{
        const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)
        const data=await res.json()
       console.log(data.daily)
        setWeather(data.daily)
    }

    useEffect(()=>{
apiReq()
    },[coords])

	return (
		<div id="weather-app" className='container text-center p-4'>
			<h2 className='mb-3'>Weather App</h2>
			<div id="coordinates" className='input-group mb-3'>
				<span className='input-group-text'>Latitude</span>
				<input
					type="text"
					placeholder="Latitude"
					aria-label="Latitude"
                    className='form-control'
                    value={coords.latitude}
                    onChange={e=>{
                        setCoords({...coords,
                        latitude:e.target.value
                        })
                    }}
				/>
				<span className='input-group-text'>Longitude</span>
				<input
					type="text"
					placeholder="Longitude"
					aria-label="Longitude"
                    className='form-control'
                    value={coords.longitude}
                    onChange={e=>{
                        setCoords({...coords,
                        longitude:e.target.value
                        })
                    }}
				/>
				<button className='btn btn-warning' onClick={()=>{
            navigator.geolocation.getCurrentPosition(function(position) {
			setCoords({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			})
		})
                }}>Auto-Detect</button>
			</div>
			<div className="row">

            {[0,1,2,3,4,5,6].map(day=>(
<div className="col-3" key={day}>
					<div className="card my-3">
						<div className="card-body">
					    		<h3 className="card-title text-primary">{weather?.time[day]}</h3>
							<div className="card-text">
								<h5 className='text-info'>
									<i className={`wi${weatherCodeMapping[weather?.weathercode[day]]?.icon}`}></i>
                                    {weatherCodeMapping[weather?.weathercode[day]]?.weather}
								</h5>
								<table className='table table-bordered'>
									<thead>
    										                <tr  className='table-dark'           id="temperature">
											<th colSpan={2}>Temperature</th>
										</tr>
										<tr>
											<th className='table-success'>Min</th>
											<th className='table-danger'>Max</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='text-success'>
                                            {weather?.temperature_2m_min[day]}°C</td>
											<td className='text-danger'>{weather?.temperature_2m_max[day]}°C</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
            ))}

				
			</div>
		</div>
	)
}
