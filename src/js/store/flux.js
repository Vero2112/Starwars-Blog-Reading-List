const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // characters: [
      //   // ,
      //   // {
      //   // 	title: "SECOND",
      //   // 	background: "white",
      //   // 	initial: "white"
      //   // }
      // ],
      personajeDetalle: [],
      personaje: [],
      planeta: [],
      planetaDetalle: [],
      planetaDescripción: [],
      starship: [],
      starshipDetalle: [],
      vehicle: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      agregarPersonajes: (detallePersonaje) => {
        setStore({ personaje: detallePersonaje });
      },

      agregarPlanetas: (detallePlaneta) => {
        const store = getStore();
        setStore({ ...store, planeta: detallePlaneta });
      },

      agregarStarships: (detailStarship) => {
        const store = getStore();
        setStore({ ...store, starship: detailStarship});
      },

      setVehicles: (data) => {
        const store = getStore();
        setStore({ ...store, vehicle: data});
      },

      setCharacters: (data) => {
        const store = getStore();
        setStore({ ...store, characters: data });
      },

      setPersonajeDetalle: (data) => {
        const store = getStore();
        setStore({ ...store, personajeDetalle: data });
      },

      setPlanetaDetalle: (detallePlaneta) => {
        const store = getStore();
        setStore({ ...store, planetaDetalle: detallePlaneta });
      },

      setStarshipDetalle: (detalleStarship) => {
        const store = getStore();
        setStore({ ...store, starshipDetalle: detalleStarship });
      },

      setPlanetaDescripcion: (descripcionPlaneta) => {
        const store = getStore();
        setStore({ ...store, planetaDescripción: descripcionPlaneta });
      },



      saveFavorite: (name, id, url) => {
        const store = getStore();
        const newFavorite = {};
        newFavorite.name = name;
        newFavorite.id = id;
        newFavorite.src = url;
        const auxFavorites = [...store.favorites, newFavorite];

        setStore({ favorites: auxFavorites });
      },

      // listarDetallePersonaje: () => {
      //   const store = getStore();
      //   return store.personajeDetalle;
      // },

      listarFavorites: () => {
        const store = getStore();
        return store.favorites;
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

	  numFavorites: () => {
		const store = getStore();
		return store.favorites.length;
	  },

	  deleteFavorites: (name) => {
		const store = getStore();
		const data = store.favorites.filter((item) => item.name !== name);
		setStore({ ...store, favorites: data });
	  },

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
