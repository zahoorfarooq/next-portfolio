import conf from "@/conf/conf";

export const gql = async (query) => {
  const data = await fetch(`https://gql.hashnode.com`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  return data.json();
};

const host =
  conf.hashnodeHost && conf.hashnodeHost !== "undefined"
    ? conf.hashnodeHost
    : "zahoorfarooq.hashnode.dev";

export const GET_USER_ARTICLES = `
  query Publication {
    publication(host: "${host}") {
      posts(first: 20) {
        edges {
          node {
            id
            slug
            title
            url
            cuid
            coverImage {
              url
            }
            brief
            readTimeInMinutes
            publishedAt
          }
        }
      }
    }
  }
`;
