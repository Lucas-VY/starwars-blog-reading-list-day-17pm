const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: null,
            planets: null,
            vehicles: null,
            favorites: []
        },
        actions: {
            getCharacters: async url => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                try {
                    const resp = await fetch(url);
                    const data = await resp.json();
                    console.log(data);
                    setStore({ characters: data })

                } catch (error) {
                    console.warn(error)
                }
            },
            getPlanets: async url => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }

                try {
                    const resp = await fetch(url);
                    const data = await resp.json();
                    console.log(data);
                    setStore({ planets: data })

                } catch (error) {
                    console.warn(error)
                }
            },
            getVehicles: async url => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }

                try {
                    const resp = await fetch(url);
                    const data = await resp.json();
                    console.log(data);
                    setStore({ vehicles: data })

                } catch (error) {
                    console.warn(error)
                }
            },
            getList: () => {
                if (localStorage.getItem('lista')) {
                    let u = localStorage.getItem('lista');
                    setStore({ favorites: JSON.parse(u) })
                }
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


        }
    }
}

export default getState;