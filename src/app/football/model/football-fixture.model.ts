export interface FootballFixtureRequest {
  errors: [];
  results: number;
  response: FootballFixture[];
}
export interface FootballFixture {
  teams?: FootballTeamWinner;
  goals?: GameGoals;
}

export interface FootballTeamWinner {
  home?: FootballTeamHome;
  away?: FootballTeamAway;
}
export interface FootballTeamHome {
  id?: number;
  name?: string;
  logo?: string;
  winner?: boolean;
}

export interface FootballTeamAway {
  id?: number;
  name?: string;
  logo?: string;
  winner?: boolean;
}

export interface GameGoals {
  home?: number;
  away?: number;
}
