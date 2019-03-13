    React JS solves the problem of having a large and complex DOM with a bunch of components on top of a large database of information. It allows developers to create components that display custom information and update in realitime when changes happen. Every user can potentially see a different custom element displayed to them. 

1.  What does it mean to _think_ in react?

    Think with consideration for components, state, and a heirarchy. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    a class component contains the State object which can be updated, and has class methods that can be created and used as well as lifecycle methods such as Component did update. 
    
    Functional components are used to display specific information and are not quite as dynamic as class components. They also do not have all the functions of the React Components library. 

1.  Describe state.

    State is an object in a React Class Component that holds all information given to it. It can be updated which will cause the DOM to be rerendered by React. React is smart and will only update elements that are affected by the state change. 

1.  Describe props.

    Props stands for properties. Props contains specific data available to that component. When handling that component, you can access the props within it to stylize or display custom/dynamic data. 
