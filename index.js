module.exports = function gracefulShutdown (cleanup) {
  process.on('SIGTERM', () => {
    cleanup()
      .then(() => process.exit(0))
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  })
}