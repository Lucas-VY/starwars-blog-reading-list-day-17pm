const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        characters: null,
        planets: null,
        vehicles: null,

        favorites: [],
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


          //AGREGA EL PERSONAJE A FAVORITOS
        getFavorites: () => {
            if (localStorage.getItem('List')) {
                let u = localStorage.getItem('List');
                setStore({ favorites: JSON.parse(u) })
            }
        },
        
        saveList: () => {
          localStorage.setItem('list', JSON.stringify(getStore().favorites))
      },
      addCharacter: (personaje) => {
          if (getStore().favorites.includes(personaje)) {
              alert('this character already exist in your List')
              console.log('the character already exist on your list')
          } else {

              setStore({
                  favorites: getStore().favorites.concat(personaje)
              })
          }
          getActions().saveList();
      },
      deleteFavorite: (item) => {
          setStore({
              favorites: getStore().favorites.filter(fav => fav !== item)
          })
          
          getActions().saveList();
        }
      },
    };
  };
  
  export default getState;