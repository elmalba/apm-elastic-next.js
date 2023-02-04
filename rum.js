import { init as initApm } from '@elastic/apm-rum'
const apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'JSCONF-frontend-rum',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://negrote.apm.us-central1.gcp.cloud.es.io:443',

  // Set the service version (required for source map feature)
  serviceVersion: '1.0',

  // Set the service environment
  environment: 'development'
})

export default apm 