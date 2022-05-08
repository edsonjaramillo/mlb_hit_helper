import { BatterType } from '@/lib/graphcms/types';

const rowColorCalculator = (hits: number) => {
  if (hits > 0) return 'player--hits';

  return 'player--nohits';
};

const PlayerStats = (batter: BatterType) => (
  <div className='player'>
    <div
      style={{ backgroundColor: batter.primary_color, color: batter.secondary_color }}
      className='player__headergrid'>
      <h2>{`${batter.name} | ${batter.team_name}`}</h2>
      <span>{`10 Game Hitting Average ${batter.moving_average}`}</span>
    </div>
    <table
      className='player__table'
      summary={`This table shows the previous 10 games that ${batter.name} has batted in along with team played, hits, and at bats.`}>
      <caption className='player__caption'>Previous 10 Games</caption>
      <thead>
        <tr>
          <th scope='col'>Date</th>
          <th scope='col'>Team Played</th>
          <th scope='col'>Hits</th>
          <th scope='col'>At Bats</th>
        </tr>
      </thead>
      <tbody>
        {batter.games.map((game, i) => (
          <tr className={rowColorCalculator(game.hits)} key={i}>
            <td>{game.date}</td>
            <td>{game.team_played}</td>
            <td>{game.hits}</td>
            <td>{game.at_bats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PlayerStats;
