export interface FootballStanding {
  rank: number;
  team?: StandingTeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all?: StandingAll;
  time?: Date;
}

export interface StandingTeam {
  id?: number;
  name?: string;
  logo?: string;
}

export interface StandingAll {
  played?: number;
  win?: number;
  draw?: number;
  lose?: number;
}
