const localizations = {
  'it': {
    '100': 'Autenticazione fallita'
  },
  'en': {
    '100': 'Authentication fail'
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let default_locale = 'it'
  let available_locales = ['it','en']
  let params = new URLSearchParams(window.location.search)
  let locale = available_locales.includes(params.get('locale')) ? params.get('locale') :  default_locale ;
  let element = document.getElementById('error') 
  if (localizations[locale][params.get('error')]) { 
    element.innerHTML = localizations[locale][params.get('error')] 
  }
});
