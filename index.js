addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Get client IP and country/ASN information
  let country = request.headers.get('CF-IPCountry')

// Redirect to 1.1.1.1 if client is not from Singapore
	if (country != 'SG') {
     return Response.redirect('https://1.1.1.1/', 301)
  }

 // Otherwise, continue with normal request processing
  return fetch(request)
}

