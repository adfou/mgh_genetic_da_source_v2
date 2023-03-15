import { useStaticQuery, graphql } from "gatsby";

const useDrupalMenu = () => {
  const { allMenuLinkContentMenuLinkContent } = useStaticQuery(
    graphql`
      query {
        allMenuLinkContentMenuLinkContent {
          edges {
              node {
                title
                weight
                link {
                  uri
                }
            }
          }
        }
      }
    `
  );
  console.log(allMenuLinkContentMenuLinkContent.edges)
  return allMenuLinkContentMenuLinkContent.edges;
}

export { useDrupalMenu };
