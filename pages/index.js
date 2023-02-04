
import styles from '../styles/Home.module.css';
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import apm from '../rum'

async function GetMoney(money){

  let moneyApi,moneyResult;
  switch(money) {
    case "dolar":
      moneyApi="dolar"
      moneyResult="Dolares";
      break;
    case "euro":
      moneyApi="euro"
      moneyResult="Euros";
      break;
    default:
      return
  }

    
    
  const transaction = apm.startTransaction('Click get Data', 'custom')
  const url = `https://api.cmfchile.cl/api-sbifv3/recursos_api/${moneyApi}/2023?apikey=1691a400e015a7310152a544db165df6bf613975&formato=json`
  const httpSpan = transaction.startSpan('GET ' + url, 'external.http')

  let results = await fetch(url);
  results = await results.json()
  httpSpan.end()
  transaction.end()

  return  results[moneyResult][0]
}


export default  function Regions() {

  const [dolar,SetDolar] = useState({Valor:""})
  const [euro,SetEuro] = useState({Valor:""})
  useEffect(() => {
    const fetchData = async () => {
      let resultDolar = await GetMoney("dolar")
      let resultEuro = await GetMoney("euro")
      SetDolar(resultDolar)
      SetEuro(resultEuro)

    }
    fetchData().catch(console.error);
  }, []);



  console.log(dolar)
  return (
    <div className={styles.container}>

      <main>
        <h1 className={styles.title}>
          Buscador de  <Link href="/">Parques nacionales</Link>
        </h1>

        <p className={styles.description}>
          Creado para la <code>JsConf 2023</code>
        </p>

        <div className={styles.grid}>

 
          <a className={styles.card}>
            <h3>Dolar</h3>
            <p>$ {dolar["Valor"]}</p>
          </a>

          <a className={styles.card}  >
              <h3>Euros</h3>
              <p>$ {euro["Valor"]} </p>
          </a>


        
       
          
        </div>
      </main>




    </div>
  )
}