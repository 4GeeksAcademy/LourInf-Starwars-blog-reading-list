const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			starships: [],
			characterDetails:{},
			planetDetails:{},
			starshipDetails:{}
		},
		
		actions: {
			/*Notes on Syntax inside actions: 
					getActions() ==> use it to call another action (function) inside actions (function)
					getStore(); ==> use it to access to some value inside store
					setStore({ key: value }); ==> use it to reset the global store value (graba los datos en el store). key: what we want to change; value: new value we want to give it
			*/
			
			getCharacters: async () => {
				let characters = localStorage.getItem("characters")
				if (characters) {
					setStore({characters: JSON.parse(characters)})
					return
				}

				const url = process.env.API_URL + "/people";
				const options = {
					method: "GET"
				};
				const response = await fetch (url,options);
				if (response.ok) {
					const data = await response.json ();
					console.log(data);
					setStore({ characters: data.results }); //1. if response ok, we save the data.results inside store-characters[]. Now instead of having an empty array of characters in store, we will have the array with the 10 characters and their info (we can check that in react dev tools)
					//2. we also need to save the data in the localStorage using localStorage.setItem("variable", JSON.stringify(value we want to assign to the variable));
					//JSON.stringify is needed when we save in localStorage so it can read what's inside our data.results
					localStorage.setItem("characters", JSON.stringify(data.results));
				} else {
					console.log ("Error:", response.status, response.statusText);
				}
			},


			addFavorites: ({ type, name }) => {
				// 1. in order to add something to favorites, we first need to receive something, that's why we have "type" and "name" parameters
				const store = getStore(); // 2. We need to get whatever is currently in store.favorites, so we access store and then favorites
				// 3. we need to check if the item is already in favorites using .map and .includes. If there is a match, isItemInFavorites will be true
				const isItemInFavorites = store.favorites.map((item) => item.name === name && item.type === type).includes(true);
				// 4. if the item is in favorites (isItemInFavorites=true), we use .filter() to create a new array that includes all items from store.favorites except the one that matches the specified name and type
				//if the item is not in favorites (isItemInFavorites=false), we use spread operator to create an array that includes all items existing in store.favorites and adds a new object at the end with the specified type and name
				const updatedFavorites = isItemInFavorites ? store.favorites.filter((item) =>
					 !(item.name === name && item.type === type))
					: [...store.favorites, { type, name }];
				//5.we update the state of the store's favorites with the modified list
				setStore({ favorites: updatedFavorites });
			},

			removeFavorites: (name) =>{
				const store = getStore();
				setStore({       ///1. as we want to remove sth we already have, we need to access directly setStore() so we can change the global store value of favorites.
					favorites: store.favorites.filter((item) => item.name !== name)//2. to remove we use the method filter
				  });
				},

			getCharacterDetails: async (id) => {
					const url = process.env.API_URL + "/people/" + id;
					const options = {
						method: "GET"
					};
					const response = await fetch(url, options);
					console.log(response);
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({ characterDetails: data.result.properties }); //1. if response ok, we save the properties inside store-characterDetails{}. Now instead of having an empty object of the character details in store, we will have the properties such as height, mass, hair_color, etc (we can check that in react dev tools)
					//2. we could save it in localStorage too but in this case it's not needed, the important ones to be saved were the favorites ones.
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				},
			
				getPlanets: async () => {
					const url = process.env.API_URL + "/planets/";
					const options = {
						method: "GET"
					};
					const response = await fetch(url, options);
					console.log(response);
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({ planets: data.results });
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				},

				getPlanetDetails: async (id) => {
					const url = process.env.API_URL + "/planets/" + id;
					const options = {
						method: "GET"
					};
					const response = await fetch(url, options);
					console.log(response);
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({ planetDetails: data.result.properties });
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				},
				
				getStarships: async () => {
					const url = process.env.API_URL + "/starships";
					const options = {
						method: "GET"
					};
					const response = await fetch(url, options);
					console.log(response);
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({ starships: data.results });
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				},

				getStarshipDetails: async (id) => {
					const url = process.env.API_URL + "/starships/" + id;
					const options = {
						method: "GET"
					};
					const response = await fetch(url, options);
					console.log(response);
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({ starshipDetails: data.result.properties });
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				},
			
		}
	}
};
export default getState;