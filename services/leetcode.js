import axios from "axios";

export async function fetchLeetCodeProfile(username) {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          ranking
          reputation
          starRating
          solutionCount
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  const response = await axios.post("https://leetcode.com/graphql", {
    query,
    variables: { username },
  });

  if (!response.data?.data?.matchedUser) {
    throw new Error("Failed to fetch LeetCode data");
  }

  return response.data.data.matchedUser;
}
