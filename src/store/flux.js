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
    
        getList: () => {
            if (localStorage.getItem('lista')) {
                let u = localStorage.getItem('lista');
                setStore({ favorites: JSON.parse(u) })
            }
            /*                 if (getStore().favorites.includes(personaje)){
                                alert('El personaje ya se encuentra en la lista de favoritos')
                                console.log('personaje ya existe en la lista')
                            } else {
                            
                            setStore({
                                favorites: getStore().favorites.concat(personaje)
                            })} */
        },

        saveList: () => {
            localStorage.setItem('lista', JSON.stringify(getStore().favorites))
        },
        addCharacter: (personaje) => {
            if (getStore().favorites.includes(personaje)) {
                alert('El personaje ya se encuentra en la lista de favoritos')
                console.log('personaje ya existe en la lista')
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



        /// CAPTURA EL FAVORITO Y LO MANTIENE PERO NO LO GUARDA EN SET STORE
        /*  pushFavorite: (name) => {
        let store = getStore();
          setStore({
            globalName: store.globalName.concat(name)
          });
        },
        captureItem: name => {
            let found = getStore().favorites.find(item => item === name);
            if (!found) setStore({ favorites: [...getStore().favorites, name] });
        }, */
      },
    };
  };
  
  export default getState;