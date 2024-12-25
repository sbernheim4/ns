// import { useQuery } from "@tanstack/react-query";
import { useGetAllUserGroupsQuery, useGetEventsQuery, useGetUserGroupsQuery, useGetUsersNameAndEmailQuery } from "~/generated/gqlQueries";
// import { allUsers, GET_USER_GROUPS, getGQL } from "~/utils/gql";
import { getRoute } from "~/utils/rest";

export const Welcome = () => {

	// const getEvents = getRoute('/events', []);
	// const getGroups = getRoute('/user-groups', []);

	// USING GQL via React Query
	// const usersQuery = useQuery({
	// 	queryKey: ['users'],
	// 	queryFn: getGQL(allUsers),
	// });

	// USING GENERATED HOOK via Apollo
	const usersQuery = useGetUsersNameAndEmailQuery();

	// USING GENERATED HOOK via Apollo
	const usersAndGroupsQuery = useGetUserGroupsQuery();

	// USING GENERATED HOOK via Apollo
	const eventsQuery = useGetEventsQuery();

	// USING GENERATED HOOK via Apollo
	const groupsQuery = useGetAllUserGroupsQuery();

	// USING REST
	// const eventsQuery = useQuery({
	// 	queryKey: ['events'],
	// 	queryFn: getEvents,
	// });

	// USING REST
	// const groupsQuery = useQuery({
	// 	queryFn: getGroups,
	// 	queryKey: ['groups'],
	// })

	const users = usersQuery.data?.allUsers?.nodes ?? [];
	const events = eventsQuery.data?.allEventTypes?.nodes?.filter(x => x !== null) ?? [];
	const groups = groupsQuery.data?.allUserGroups?.nodes.filter(x => x !== null) ?? [];
	const usersAndGroups = usersAndGroupsQuery?.data?.allUsers?.nodes.reduce((accumulator, user) => {

		if (user !== null) {
			user.userGroupMembershipsByUserEmail.nodes
				.filter(x => x !== null)
				.reduce((acc, entry) => {
					const groupEmail = entry.groupEmail;
					const userEmail = entry.userEmail;

					if (Array.isArray(acc[groupEmail])) {
						acc[groupEmail].push(userEmail);
					} else {
						acc[groupEmail] = [userEmail];
					}

					return acc;
				}, accumulator);
		}

		return accumulator;
	}, {} as Record<string, string[]>);

	return (
		<>
			<h1>Welcome</h1>

			<h3>Available Users</h3>
			{users.filter(x => x !== null)?.map(user => {
				return (
					<p>{user.name} - {user.email}</p>
				)
			})}

			<br />

			<h3>Available User Groups</h3>
			{groups.map(group => {
				return (
					<p key={group.name}>{group.name} - {group.email}</p>
				)
			})}

			<br />

			<h3>Available Events</h3>

			{events.map(event => {
				return (
					<p>{event.name} {event.description ? `- ${event.description}` : ''}</p>
				)
			})}

			<br />
			<h3>Users and Groups</h3>

			{Object.entries(usersAndGroups ?? {}).map(([groupEmail, userEmails]) => (
				<div key={groupEmail} className="group">
					<h2>{groupEmail}</h2>
					<ul style={{ marginLeft: '30px' }}>
						{userEmails.map(userEmail => (
							<li key={userEmail}>{userEmail}</li>
						))}
					</ul>
					<br />
				</div>
			))}
		</>
	);
};
