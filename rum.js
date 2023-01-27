

import { init as initApm } from '@elastic/apm-rum'

import conf from './elastic-apm-node'

const apm = initApm(conf)


export default apm 