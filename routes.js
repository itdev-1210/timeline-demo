const router = module.exports = require('next-routes')()

router.add({
  name: 'index',
  pattern: '/'
})

router.add({
  name: 'jobtype',
  pattern: '/:jobtype'
})

module.exports = router
