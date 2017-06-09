
/**
 * Object Router has fields routes, suspended.
 */
const Router = {
  routes: [],
  suspended: true,
};

/**
 * Registers route with given route_handler.
 * @param {string} route - The route to register.
 * @param {function} routeHandler - The method invoked when the route
 * is visited.
 */
Router.register = (route, routeHandler) => {
  // Check if route is valid.
  if (route[0] === '#' || route[0] === '/' || route[route.length - 1] === '/') {
    throw new Error('Route not registered because it contains' +
    '# as first char or / as first char or / as last char ');
  }

  // Check if route is already registered.
  Router.routes.forEach( (entry) => {
    if (entry.route === route) {
      throw new Error('Route not registered because it already exists.');
    }
  });

  // Register the route.
  Router.routes.push({
    route: route,
    handler: routeHandler,
    // alternatively
    // could just write:
    // route,
    // handler
  });
};

/**
 * Unregisters the route (removes from routes).
 * @param {string} routeToUnregister - route name to unregister.
 */
Router.unregister = (routeToUnregister) => {
  // filters out the routes that are route_to_unregister
  Router.routes = Router.routes.filter( (entry) => {
    return entry.route !== routeToUnregister;
    // true if current route is not route_to_unregister
  });
};

/**
 * Suspends the router's operation.
 */
Router.suspend = () => {
  Router.suspended = true;
};

/**
 * Unsuspends the router's operation.
 * @param {bool} [andCheckRoute] - flag to check current route.
 */
Router.unsuspend = (andCheckRoute) => {
  Router.suspended = false;
  if (andCheckRoute) {
      handleRoute();
  }
};

/**
 * Start Router.
 * @param {bool} [andCheckRoute] - flag to check current route.
 */
Router.start = (andCheckRoute) => {
  Router.unsuspend(andCheckRoute);
};

function init(){
  // onhaschange from web API
  if ('onhashchange' in window) {
    window.addEventListener('hashchange', handleRoute);
  } else {
    // if using an old browser that doesn't support hashchange event-emitter
    let oldURL = window.location.href;
    let oldHash = window.location.hash;

    window.setInterval( () => {
      const newURL = location.href;
      const newHash = location.hash;

      if (newHash !== oldHash) {
        let e = {
          type: 'hashchange',
          oldURL: oldURL,
          newURL: newURL,
        };

        handleRoute(e);

        oldURL = newURL;
        oldHash = newHash;
      }
    }, 100);
  }
}

function handleRoute(someEvent) {
  if (Router.suspended) {
    return;
  }

  // WRITE parseLocationHash l8r
  const routeData = parseLocationHash(window.location.hash);

  // registered routes that match current route
  const matches = [];

  const routerRoutesLength = Router.routes.length;
  let matchData;
  let routeParams;

  for (let i = 0; i < routerRoutesLength; i++){
    // WRITE routeMatch l8r
    // routeMatch returns object with fields score, params...
    matchData = routeMatch(Router.routes[i].route, routeData.route);
    if (matchData) {

      routeParams = routeData.params;
      for (let key in matchData.params) {
        // if key is defined specifically in matchData.params
        // and not in anything inherited
        //if(matchData.params.hasOwnProperty(key)) {
        routeParams[key] = matchData.params[key];
        //}
      }

      matches.push({
        route: Router.routes[i].route,
        handler: Router.routes[i].handler,
        params: routeParams,
        score: matchData.score
      });
    }

    if (!matches.length) {
      return;
    }

    let match = matches.reduce( (acc, curr) => {
      if (curr.score < acc.score) {
        acc = curr;
      }
      return acc;
    });
    match.handler(match.params);
  }

}

// Object Router can be seen on import.
export default Router;
