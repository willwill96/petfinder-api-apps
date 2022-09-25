export function browserNetworkUrlRewriter (rewriteFn: (originalUrl: (string)) => string) {
    // alias window in this fn to allow for better minification 
    const _window = window
    // Intercept Fetch
    let tempFn: Function = _window.fetch
    _window.fetch = function (this: any, resource, init) {
        if (typeof resource === 'object') {
            if ('href' in resource) {
                return tempFn.call(this, new URL(rewriteFn(resource.href)), init)
            } else {
                return tempFn.call(this, new Request(rewriteFn(resource.url), resource), init)
            }
        } else {
            return tempFn.call(this, rewriteFn(resource), init)
        }
    }

    // Intercept XMLHttpRequest
    const tempXmlOpen: Function = _window.XMLHttpRequest.prototype.open
    _window.XMLHttpRequest.prototype.open = function (...args) {
        const [_, resource, ...rest] = args
        return tempXmlOpen.call(this, _, rewriteFn(typeof resource === 'object' ? resource.href : (resource)), ...rest)
    }
    // Intercept sendBeacon
    // alias navigator in this fn to allow for better minification 
    const _navigator = _window.navigator
    if (_navigator) {
        const tempSendBeacon = _navigator.sendBeacon
        _navigator.sendBeacon = function (resource, a) {
            return tempSendBeacon.call(this, rewriteFn(typeof resource === 'object' ? resource.href : (resource)), a)
        }
    }
}