import axios from "axios";

export const getGQL = (query: string, variables?: Record<string, string>) => async () => {

	const response = await axios.post(
		"http://localhost:5678/graphql",
		{ query, variables, },
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	return response.data.data;
};

export const allUsers = `
query Foo {
	allUsers {
		nodes {
			email
			name
		}
	}
}`;

export const GET_USER_GROUPS = `
query GetUserGroups {
  allUsers {
    nodes {
      userGroupMembershipsByUserEmail {
        nodes {
          userEmail
          groupEmail
        }
      }
    }
  }
}`;
