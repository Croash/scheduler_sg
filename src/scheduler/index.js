import * as R from 'ramda'
// import { push, pop, peek } from '../utils/heapify'
// import { Functor, Maybe, Either } from '../functor'
import { shouldYield } from './common'
import { pushTask, popTask, peekTask, taskQueueFunctor } from './taskQueue'
import { flushWork, planWork, flushBase } from './planwork'

// scheduleCallback:: callback => void
const scheduleCallback = (callback) => {
  pushTask(callback)
  planWork(
    () => flushWork(
      // planWork(
        () => {
          const r = flushBase(
            peekTask()._value
          )
          return !!peekTask()._value
        }
    )
  )
}

export {
  planWork,
  scheduleCallback,
  shouldYield
}
