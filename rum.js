

import { init as initApm } from '@elastic/apm-rum'



const apm = initApm({
  serverUrl:"https://2e1e41d1975f4c5a997490a09f2bbe7f.apm.us-central1.gcp.cloud.es.io:443",
  serviceName:"JSCONF-Frontend"
})


export default apm 