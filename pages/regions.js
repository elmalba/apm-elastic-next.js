
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { prisma } from '../db'

export async function getStaticProps() {
  const regions = await prisma.regions.findMany({
    include: {
      airports: true, // Return all fields
    },
  })

  return {
    props : { regions }
  }
}



export default  function Regions({regions}) {


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