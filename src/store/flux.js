const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        characters: null,
        urlPeople: "http://swapi.dev/api/people/",

        planets: null,
        urlPlanets: "http://swapi.dev/api/planets/",

        vehicles: null,
        urlVehicles: "http://swapi.dev/api/starships/",

        //favorites
        globalName: []
      },
      actions: {
        getCharacters: () => {
          fetch("http://swapi.dev/api/people/")
            .then( (resp) => resp.json())
            .then((data) => {
              setStore({
                characters: data,
              });
            });
        },
        getPlanets: () => {
          fetch("http://swapi.dev/api/planets")
            .then((resp) => resp.json())
            .then((data) => {
              setStore({
                planets: data,
              });
            });
        },
        getVehicles: () => {
          fetch("http://swapi.dev/api/starships")
            .then((resp) => resp.json())
            .then((data) => {
              setStore({
                vehicles: data,
              });
            });
        },
        pushFavorite: (name) => {
        let store = getStore();
          setStore({
            globalName: store.globalName.concat(name)
          });
        },
      },
    };
  };
  
  export default getState;