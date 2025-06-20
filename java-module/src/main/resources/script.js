const isSupportedBrowser = true
const appRoot = document.querySelector('#app')

if (isSupportedBrowser) {
  appRoot.removeAttribute('hidden')

  if (import.meta.env.PROD) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    document.body.append(script)
  } else {
    console.debug(`CookieFirst is disabled in the ${import.meta.env.MODE} environment`)
  }
} else {
  appRoot.remove()
  document.querySelector('#unsupported-browser').removeAttribute('hidden')
}
