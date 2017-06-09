/**
 * Simple hash router.
 * @constructor
*/
function Router() {
  const routes = [];
  let suspended = true;
}

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
  routes.forEach( (entry) => {
    if (entry.route === route) {
      throw new Error('Route not registered because it already exists.');
    }
  });

  // Register the route.
  routes.push({
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
  routes = routes.filter( (entry) => {
    return entry.route !== routeToUnregister;
    // true if current route is not route_to_unregister
  });
};

/**
 *
 */
Router.suspend = () => {

};

/**
 *
 */
Router.unsuspend = () => {

};

/**
 *
 */
Router.start = () => {

};
