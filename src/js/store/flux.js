const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () =>{
				
			} 
			
			//get the store with const store = getStore();

			//reset the global store with setStore({ component: component });
			
		}
	};
};

export default getState;
