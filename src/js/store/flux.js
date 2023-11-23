const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			characterDetails:{},
		},
		
		actions: {
			/*Notes on Syntax inside actions: 
					getActions() ==> use it to call another action (function) within an action (function)
					const store = getStore(); ==> use it to access to some value inside store
					setStore({ key: value }); ==> use it to reset the global store value (graba los datos en el store). key: what we want to change; value: new value we want to give it
			*/
			getCharacters: async () => {
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
			addFavorites: (item) =>{  //1. in order to add sth to favorites we first need to receive sth, that's why we have parameter item
				const store = getStore(); //2. we need to get whatever I have at the moment in store-favorites so we need to access store and then favorites
				store.favorites;
				setStore({favorites: [...store.favorites, item]}) //3. we want to reset the global store value of favorites, so we use setStore(). And 4. we want to be able to add the item as the new value so we use the spread operator inside (what we want to change is favorites, and the new value is that we want to add item to it
				//we can also write it like: setStore({favorites: [...getStore().favorites, item]})
			},

			removeFavorites: (name) =>{
				setStore({       ///1. as we want to remove sth we already have, we need to access directly setStore() so we can change the global store value of favorites.
					favorites: store.favorites.filter((item) => item !== name) //2. to remove we use the method filter
				  });
				},

			getCharacterDetails: async (id) => {
				const url = process.env.API_URL + "/people/" + id;
				const options = {
					method: "GET"
				};
				const response = await fetch (url,options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setStore({ characterDetails: data.result.properties }); //1. if response ok, we save the properties inside store-characterDetails{}. Now instead of having an empty object of the character details in store, we will have the properties such as height, mass, hair_color, etc (we can check that in react dev tools)
					//2. we could save it in localStorage too but in this case it's not needed, the important ones to be saved were the favorites ones.

					console.log ("Error:", response.status, response.statusText);
				}

			
			
		}
	}};
};
export default getState;