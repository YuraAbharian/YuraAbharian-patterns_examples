function getUrl(url) {
    return console.log(`${url} - Response from server.`)
}
const cache = new Set();
const proxiedFetch = new Proxy(getUrl, {
    apply(target, thisArg, args) {
        const url = args[0];
        if(cache.has(url)){
            return console.log(`${url} - Response from cache.`);
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
});

proxiedFetch('fb.com');
proxiedFetch('vk.com');
proxiedFetch('fb.com');
