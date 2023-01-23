
import Link from 'next/link'
import { prisma } from '../../db'


export async function getStaticPaths() {
  const paths=[]
  for (let i =1 ; i < 103;i++){
    paths.push({ params: { id: i.toString() } })
  }

  return {
    paths: paths,
    fallback: false, 
  }
}


export async function getStaticProps(context) {
  const park = await prisma.parks.findUnique({
    where:{
      id:+context.params.id,
    },
    include: {
      region: {
        include:{
          airports:true,
        }
      }, 
    },
  })
  return {
    props: { park: park },
  }
}


export default  function Park({ park }) {
  let airports = park.region.airports.map((airport,key)=>airport.name )
  return (
    <>
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    <div className="col-md-6 px-0">
      <h1 className="display-4 font-italic">{park.name}</h1>
      <p className="lead my-3">ubicada en la region de {park.region.name} en la zona {park.region.zone} de chile </p>
    </div>
  </div>
  <main role="main" className="container">
  <div className="row">
    <div className="col-md-8 blog-main">
      <div className="blog-post">
        <h2 className="blog-post-title">Descripcion</h2>   
        <p>{park.content}</p>
        
      </div>{/* /.blog-post */}
      
    </div>{/* /.blog-main */}
    <aside className="col-md-4 blog-sidebar">
      <div className="p-3 mb-3 bg-light rounded">
        <h4 className="font-italic">Acerca</h4>
        <img src={park.image} ></img>
        <p className="mb-0">
            Precio: ${park.price} <br/>
            Aeropuertos : {airports.join(", ")}<br/>


        </p>
      </div>
      
    </aside>{/* /.blog-sidebar */}
  </div>{/* /.row */}
</main>
</>
  )
}