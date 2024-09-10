const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			arrayOfCOntacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Luis' code
			loadContacts: async() => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts",{
					method: "GET"
				})
				const data = await response.json();
				setStore({arrayOfCOntacts: data.contacts})
				console.log("Contacts loaded")
				console.log(data)
			},
			updateContact: async(id)=>{
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/contacts/"+id,
					{method: "PUT",
					body: JSON.stringify({
						name: updated_name,
						phone: updatedPhone,
						address: updatedAddress,
						email: updatedEmail
					  })
					} 
				)
				const data = await response.json();
				console.log("contact updated: "+data)
			},
			deleteContact: async(id)=>{
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/contacts/"+id,
					{method: "DELETE"} 
				)
				const data = await response.json();
				// Setear los nuevos datos en el contact
			},
			createContact: async(id)=>{
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/contacts",
					{method: "POST",
					body: JSON.stringify({
						name: updated_name,
						phone: updatedPhone,
						address: updatedAddress,
						email: updatedEmail
					  })
					} 
				)
				const data = await response.json();
				// Setear los nuevos datos en el contact
			},
			// Use getActions to call a function within a fuction
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
