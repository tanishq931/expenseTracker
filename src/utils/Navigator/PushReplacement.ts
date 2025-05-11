// Custom navigation helper function
export const pushReplacement = (navigation: any, routeName: string, params = {}) => {
  console.log('Here in navigator');

  // First we'll navigate to the new screen
  navigation.navigate(routeName, params);

  // Then remove the previous screen from the stack
  navigation.dispatch((state: any) => {
    // Get current routes
    const routes = state.routes;

    // Remove the second-to-last route (the previous screen)
    if (routes.length >= 2) {
      const newRoutes = [...routes];
      newRoutes.splice(routes.length - 2, 1);

      // Return the new state with the previous screen removed
      return {
        ...state,
        routes: newRoutes,
        index: newRoutes.length - 1,
      };
    }

    // If we can't remove any routes, return the original state
    return state;
  });
};
