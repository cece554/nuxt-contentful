if (typeof MauticSDKLoaded === 'undefined') {
  var MauticSDKLoaded = true
  const head = document.getElementsByTagName('head')[0]
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'http://mautic.thatsreallygood.co/media/js/mautic-form.js'
  script.onload = function() {
    MauticSDK.onLoad()
  }
  head.appendChild(script)
  const MauticDomain = 'http://mautic.thatsreallygood.co'
  const MauticLang = {
    submittingMessage: 'Please wait...'
  }
}
