import { GetStaticProps } from 'next';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getBatterStats } from '@/lib/graphcms/queries';
import { BatterType } from '@/lib/graphcms/types';
import PlayerStats from '@/components/PlayerStats';
import Header from '@/components/Header';
import HeadOpenGraph from '@/components/HeadOpenGraph';
import TeamOption from '@/components/TeamOption';
import { TeamManager } from '@/lib/TeamManager';
import { useState } from 'react';

interface HomepageProps {
  batterStats: BatterType[];
  allTeams: string[];
  publishedAt: string;
}

const Home = ({ batterStats, allTeams, publishedAt }: HomepageProps) => {
  const [team, setTeam] = useState('All Teams');

  return (
    <>
      <HeadOpenGraph
        title='Homepage'
        description={`Welcome to Edson's MLB Hit Helper! This web application was built to simplify my process of finding the best current batters for 2 to 3 bet parlays for hits. Only the teams that play today are shown.`}
        image='https://media.graphassets.com/R6eiQkMeR92TzODxF9D5'
        alt={`Edson's MLB Hit Helper`}
      />
      {/* select/option allTeams */}
      <Header publishedAt={publishedAt} />
      <select className='teamselect responsive-width' onChange={(e) => setTeam(e.target.value)}>
        <TeamOption team='All Teams' />
        {allTeams.map((team) => (
          <TeamOption team={team} key={team} />
        ))}
      </select>
      {/* <span>{team}</span> */}
      <div className='responsive-width'>
        <div className='playergrid'>
          {batterStats.map((batter) => {
            if (team === 'All Teams' || batter.team_name == team)
              return <PlayerStats key={batter.id} {...batter} />;
          })}
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const { batting } = await graphCMSClient.request(getBatterStats);
  const { stats: batterStats, publishedAt } = batting;
  const allTeams = new TeamManager().getUniqueTeams(batterStats);

  return {
    props: { batterStats, allTeams, publishedAt },
  };
};

export default Home;
