export class ITeam {
  id: number
  name: string
  logo: string
  abbrev: string
}

export class Team {
  id: number
  name: string
  logo: string
  abbrev: string

  constructor(id, name, logo, abbrev) {
    this.id = id;
    this.name = name;
    this.logo = logo; 
    this.abbrev = abbrev
  }
}