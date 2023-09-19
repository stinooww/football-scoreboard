import {FootballStanding} from "./football-standing.model";

export interface FootballCountryRequest {
  errors: [];
  response: FootballCountryRequestLeague[]
}

export interface FootballCountryRequestLeague {
  league: FootballCountry
}
export interface FootballCountry {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: FootballStanding[]
}
