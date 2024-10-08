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
			createAgenda: async() => {
				console.log("creating agenda")
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/",
					{method: "POST"})
				
			},
			createContact: async(contact) => {
			
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/contacts",
					{
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify(contact)
					}
				)
				getActions().loadContacts()
			
			},
			loadContacts: async() => {
				
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts",{
					method: "GET"
				})
				console.log(response)
				if (response.ok){
					const data = await response.json();
					setStore({arrayOfCOntacts: data.contacts})
					console.log("Contacts loaded")
					console.log(data)
				} 
			},
			updateContact: async(contact)=>{
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/contacts/"+contact.id,
					{method: "PUT",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(contact)
					} 
				)
				const data = await response.json();
				console.log("contact updated: ", contact)
				getActions().loadContacts()
			},
			deleteContact: async(id)=>{
				console.log("borrando usuario")
				const response = await fetch("https://playground.4geeks.com/contact/agendas/luisReneContacts/contacts/"+id,
					{method: "DELETE"} 
				)
				
			
				// Setear los nuevos datos en el contact
				getActions().loadContacts();
				console.log("usuario borrado")
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
