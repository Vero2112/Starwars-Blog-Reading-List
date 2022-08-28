const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [
		
				// ,
				// {
				// 	title: "SECOND",
				// 	background: "white",
				// 	initial: "white"
				// }
			],
			personajeDetalle: [],
			personaje: [],
			planeta: [],
			planetaDetalle: [], 
		},
		actions: {
			// Use getActions to call a function within a fuction
			agregarPersonajes: (detallePersonaje) => {
				setStore({ personaje: detallePersonaje });
			},

			agregarPlanetas: (detallePlaneta) => {
				const store = getStore();
				setStore({...store, planeta: detallePlaneta})				
			},

			setCharacters: (data) => {
				const store = getStore();
				setStore({...store, characters: data})
			},

			setPersonajeDetalle: (data) => {
				const store = getStore();
				setStore({...store, personajeDetalle: data})
			},

			setPlanetaDetalle: (detallePlaneta) => {
				const store = getStore();
				setStore({...store, planetaDetalle: detallePlaneta})
			},


			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
			}
			
		}
		
	};
	
};

export default getState;
