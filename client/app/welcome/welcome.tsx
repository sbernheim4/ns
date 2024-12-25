import { useQuery } from "@tanstack/react-query";
import { allUsers, GET_USER_GROUPS, getGQL } from "~/utils/gql";
import { getRoute } from "~/utils/rest";

export const Welcome = () => {

    const getEvents = getRoute('/events', []);
    const getGroups = getRoute('/user-groups', []);

    // USING GQL
    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: getGQL(allUsers),
    });

    // USING GQL
    const usersAndGroupsQuery = useQuery({
        queryKey: ['users-and-groups'],
        queryFn: getGQL(GET_USER_GROUPS),
    })

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
    const usersAndGroups = usersAndGroupsQuery?.data?.allUsers?.nodes.reduce((accumulator, user) => {
        user.userGroupMembershipsByUserEmail.nodes.reduce((acc, entry) => {
            const groupEmail = entry.groupEmail;
            const userEmail = entry.userEmail;

            // Use reduce to accumulate emails by group
            if (Array.isArray(acc[groupEmail])) {
                acc[groupEmail].push(userEmail);
            } else {
                acc[groupEmail] = [userEmail];
            }

            return acc;
        }, accumulator); // Return the accumulator to keep accumulating

        return accumulator;
    }, {} as Record<string, string[]>); // Initialize as an empty object

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
