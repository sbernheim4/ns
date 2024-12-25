import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { gql, type DocumentNode } from '@apollo/client';

type Name = string;
type Email = string;
type User = [Email, Name];

type ServerRoutes = '/events' | '/users' | '/user-groups';

const getRoute = (route: ServerRoutes) => async () => {
	const url = 'http://localhost:80' + route;
	try {
		const usersRequest = await axios.get<unknown[]>(url);
		const users = usersRequest?.data;
		return users;
	} catch (err) {
		console.log(err);
		return [];
	}
}

const getGQL = (query: string, variables?: Record<string, string>) => async () => {
	const response = await axios.post(
		"http://localhost:5678/graphql",
		{ query, variables, },
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	console.log('RESPONSE IS:', response.data)
	return response.data;
};

export const Welcome = () => {

	const getUsers = getRoute('/users');
	const getEvents = getRoute('/events');
	const getGroups = getRoute('/user-groups');

	const foo = `
query Foo {
	allUsers {
		nodes {
			email
		}
	}
}`;

	const emailQueries = useQuery({
		queryKey: ['emails'],
		queryFn: getGQL(foo),
	});

	console.log(emailQueries);

	const usersQuery = useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
	});

	const eventsQuery = useQuery({
		queryKey: ['events'],
		queryFn: getEvents,
	});

	const groupsQuery = useQuery({
		queryFn: getGroups,
		queryKey: ['groups'],
	})

	const users = usersQuery.data ?? [];
	const events = eventsQuery.data ?? [];
	const groups = groupsQuery.data ?? [];

	return (
		<>
			<h1>Welcome</h1>

			<h3>Available Users</h3>
			{users.map(user => {
				return (
					<p>{user.at(0)}</p>
				)
			})}

			<br />

			<h3>Available User Groups</h3>
			{groups.map(group => {
				return (
					<p>{group.at(1)}</p>
				)
			})}

			<br />

			<h3>Available Events</h3>

			{events.map(event => {
				return (
					<p>{event.at(1)}</p>
				)
			})}
		</>
	);
};

