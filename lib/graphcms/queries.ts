import { gql } from 'graphql-request';

export const getBatterStats = gql`
  query getBatterStats {
    batting(where: { id: "cl2v92aa4bxj80bipqgkw2t3d" }) {
      stats
      publishedAt
    }
  }
`;
