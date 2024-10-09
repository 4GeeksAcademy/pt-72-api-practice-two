import React, {useState, useEffect} from "react";
import Modal from "./modal";

//create your first component
const Home = () => {
	const [contacts, setContacts] = useState([])

	useEffect(() => {
		const createAgenda = async () => {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/valerie")
			let data = await response.json()
			if(data.slug !== "valerie") {
				let postResponse = await fetch('https://playground.4geeks.com/contact/agendas/valerie', {
					method: "POST"
				})
				let postData = await postResponse.json()
				console.log(postData)
			}
			else {
				await setContacts(data.contacts)
			}
		}
		createAgenda()
	}, [])
	return (
		<div className="text-center">
			<Modal/>
			<ol>
				{contacts?.map((contact, index) => {
					return <li>{contact.name}</li>
				})}
			</ol>
		</div>
	);
};

export default Home;
