

import { init as initApm } from '@elastic/apm-rum'

//import conf from './elastic-apm-node'

const apm = initApm(({

    // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
    serviceName: 'frontend',
  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'https://54a01199ca8e4687877322760af0ed7b.apm.us-central1.gcp.cloud.es.io:443',
  
    // Set service version (required for sourcemap feature)
    serviceVersion: '0.1'
  }))


export default apm 