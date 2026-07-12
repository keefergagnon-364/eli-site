# Jobber estimate-form handoff

## Current configuration

All estimate-request calls to action use the URL in the `jobber-quote-url` meta tag in `index.html`. Replace its current placeholder value with the approved Jobber quote-form URL. Every marked estimate link will update automatically.

## Future embedded form

The previous estimate form is preserved as commented HTML in `index.html`. It should remain disabled until one of these has been approved:

- A Jobber-hosted embed URL.
- A server-side endpoint that submits the form to Jobber's API.

For an API submission, keep Jobber credentials only in server-side environment variables. The browser form should submit to a project-owned endpoint, which validates input, applies spam protection, sends the request to Jobber, and returns a safe confirmation message. Never expose an API key in the HTML or JavaScript.
