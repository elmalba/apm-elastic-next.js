import Link from 'next/link'
import { useState, useEffect } from 'react';

import apm from '../rum'




export default  function Parks() {

  const [parks,SetParks] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const transaction = apm.startTransaction('Click get Data', 'custom')
      const url = `/api/parks`
      const httpSpan = transaction.startSpan('GET ' + url, 'external.http')
    
      let results = await fetch(url);
      results = await results.json()

      SetParks(results)
      httpSpan.end()
      transaction.end()
    

    }
    fetchData().catch(console.error);
  }, []);




  return (
    <div >

<main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Parques Nacionales</h1>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {parks.map((park,ix)=>{
              return <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" data-src={"holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text="+park.name} alt="Thumbnail [100%x225]" style={{height: '225px', width: '100%', display: 'block'}} src={park.image} data-holder-rendered="true" />
                  <div className="card-body">
                    <p className="card-text">{park.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link href={"/parks/"+park.id} type="button" className="btn btn-sm btn-outline-secondary">Visitar</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> })}
       
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}