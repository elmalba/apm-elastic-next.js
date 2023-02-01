
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
//import apm from '../rum'

export default  function Regions() {
  const [regions,SetRegions] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const transaction = apm.startTransaction('Click get Data', 'custom')
      const url = `/api/regions`
      const httpSpan = transaction.startSpan('GET ' + url, 'external.http')
    
      let results = await fetch(url);
      results = await results.json()
      
      SetRegions(results)
      httpSpan.end()
      transaction.end()

    }
    fetchData().catch(console.error);
  }, []);


  return (
    <div >

      <main>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Zona</th>
            <th scope="col">Aeropuertos</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((region,key)=>{
        
            let airports = region.airports.map((airport,key)=>airport.name )

          return <tr key={key}>
            <th scope="row">{region.id}</th>
            <td>{region.name}</td>
            <td>{region.zone}</td>
            <td>{airports.join(", ")}</td>
          </tr> })}
        </tbody>
      </table>
      </main>




    </div>
  )
}