import { BatterType } from './graphcms/types';

export class TeamManager {
  getUniqueTeams(batters: BatterType[]): string[] {
    const uniqueTeams: string[] = [];
    batters.forEach(({ team_name }) => {
      const hasTeam = uniqueTeams.includes(team_name);
      if (!hasTeam) uniqueTeams.push(team_name);
    });
    uniqueTeams.sort();
    return uniqueTeams;
  }
}
