export interface BatterType {
  id: string;
  name: string;
  team_code: string;
  team_name: string;
  primary_color: string;
  secondary_color: string;
  moving_average: number;
  games: GameType[];
}

export interface GameType {
  date: string;
  team_played: string;
  hits: number;
  at_bats: number;
}
