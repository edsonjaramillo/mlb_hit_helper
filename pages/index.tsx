import { GetStaticProps } from 'next';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getBatterStats } from '@/lib/graphcms/queries';
import type { BatterType } from '@/lib/graphcms/types';
import PlayerStats from '@/components/PlayerStats';
import Header from '@/components/Header';
import HeadOpenGraph from '@/components/HeadOpenGraph';

interface HomepageProps {
  batterStats: BatterType[];
  publishedAt: string;
}

const Home = ({ batterStats, publishedAt }: HomepageProps) => (
  <>
    <HeadOpenGraph
      title='Homepage'
      description={`Welcome to Edson's MLB Hit Helper! This web application was built to simplify my process of finding the best current batters for 2 to 3 bet parlays for hits.`}
      image='https://media.graphassets.com/R6eiQkMeR92TzODxF9D5'
      alt={`Edson's MLB Hit Helper`}
    />
    <Header publishedAt={publishedAt} />
    <div className='responsive-width'>
      <div className='playergrid'>
        {batterStats.map((batter) => (
          <PlayerStats key={batter.id} {...batter} />
        ))}
      </div>
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { batting } = await graphCMSClient.request(getBatterStats);
  const { stats: batterStats, publishedAt } = batting;
  

  return {
    props: { batterStats, publishedAt },
  };
};

export default Home;
