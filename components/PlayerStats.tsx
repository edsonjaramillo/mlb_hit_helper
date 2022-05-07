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
    <span className='player__lastgames'>Last 10 Games</span>
    <table className='player__table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Team Played</th>
          <th>Hits</th>
          <th>At Bats</th>
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
