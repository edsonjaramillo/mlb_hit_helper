import { GetStaticProps } from 'next';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getBatterStats } from '@/lib/graphcms/queries';
import type { BatterType } from '@/lib/graphcms/types';
import PlayerStats from '@/components/PlayerStats';
import Header from '@/components/Header';

interface HomepageProps {
  batterStats: BatterType[];
}

const Home = ({ batterStats }: HomepageProps) => (
  <>
      <Header />
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
  const { stats: batterStats } = batting;

  return {
    props: { batterStats },
  };
};

export default Home;
