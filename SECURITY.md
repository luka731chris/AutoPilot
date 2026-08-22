# Security Policy

## Scope

Security-sensitive areas include:

- calendar subscription URL handling;
- the optional calendar fetch proxy;
- HTML parsing/rendering of externally supplied calendar content;
- backup import;
- persistence of family data in browser storage.

## Reporting

Do not file public GitHub issues containing real family calendar URLs, backup files, names, addresses, or schedule screenshots.

For a private repository, report security concerns directly to the repository owner through a private channel.

## Secrets

No real calendar URL should appear in committed files. Subscription URLs may grant read access to calendars and should be handled as bearer secrets.

## Proxy

The included worker is narrowly intended to fetch user-supplied calendar URLs and blocks obvious private-network hosts. If exposed publicly, add rate limiting and additional allowlisting/authentication appropriate to the deployment.
