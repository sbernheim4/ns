import { useQuery } from "@tanstack/react-query";
import { allUsers, getGQL } from "~/utils/gql";
import { getRoute } from "~/utils/rest";

export const Welcome = () => {

	const getEvents = getRoute('/events', []);
	const getGroups = getRoute('/user-groups', []);

	// USING GQL
	const usersQuery = useQuery({
		queryKey: ['users'],
		queryFn: getGQL(allUsers),
	});

	// USING REST
	const eventsQuery = useQuery({
		queryKey: ['events'],
		queryFn: getEvents,
	});

	// USING REST
	const groupsQuery = useQuery({
		queryFn: getGroups,
		queryKey: ['groups'],
	})

	const users = usersQuery.data?.allUsers?.nodes ?? [];
	const events = eventsQuery.data ?? [];
	const groups = groupsQuery.data ?? [];

	return (
		<>
			<h1>Welcome</h1>

			<h3>Available Users</h3>
			{users?.map(user => {
				return (
					<p>{user.name} - {user.email}</p>
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
