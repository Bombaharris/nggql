CREATE (MrGreen:Person {
    id: "MrGreen",
    name:"Rafał",
    surname:"Zielonka",
    birthday: "1981-12-30",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
})
CREATE (Polon:Person {
    id: "Polon",
    name:"Kamil",
    surname:"Polanowski",
    birthday: "1988-11-10",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
})

CREATE (Angular:Skill {id: "Angular", name:"Angular"})
CREATE (Aws:Skill {id: "AWS", name:"AWS"})
CREATE (Css:Skill {id: "CSS", name:"CSS"})
CREATE (Docker:Skill {id: "Docker", name:"Docker"})
CREATE (Html:Skill {id: "HTML", name:"HTML"})
CREATE (Git:Skill {id: "Git", name:"Git"})
CREATE (Java:Skill {id: "Java", name:"Java"})
CREATE (JavaScript:Skill {id: "JavaScript", name:"JavaScript"})
CREATE (TypeScript:Skill {id: "TypeScript", name:"TypeScript"})
CREATE (Linux:Skill {id: "Linux", name:"Linux"})

CREATE (FE:Role {id: "Frontend Developer", name:"Frontend Developer"})
CREATE (Architect:Role {id: "Architect", name:"Architect"})

CREATE (ProjectDCX:Project {id: "DCX", name:"DCX"})

CREATE (Department207400:Department {id: "207400", name:"Frontend"})

CREATE (SeniorRate:Rate {validFrom: "2017-01-01", value: 1000})
CREATE (RegularRate:Rate {validFrom: "2017-01-01", value: 800})
CREATE (JuniorRate:Rate {validFrom: "2017-01-01", value: 600})

CREATE
(MrGreen)-[:HAS_SKILL]->(Angular),
(MrGreen)-[:HAS_SKILL]->(Aws),
(MrGreen)-[:HAS_SKILL]->(Css),
(MrGreen)-[:HAS_SKILL]->(Html),
(MrGreen)-[:HAS_SKILL]->(Git),
(MrGreen)-[:HAS_SKILL]->(Java),
(MrGreen)-[:HAS_SKILL]->(JavaScript),
(MrGreen)-[:HAS_SKILL]->(TypeScript),
(MrGreen)-[:HAS_SKILL]->(Linux),
(Polon)-[:HAS_SKILL]->(JavaScript),
(Polon)-[:HAS_SKILL]->(TypeScript)

// To Create skill at once
// MATCH
//   (person:Person),
//   (skill:Skill)
// WHERE person.id = 'Polon' AND skill.id = 'Java'
// CREATE (person)-[r:HAS_SKILL]->(skill)

CREATE
(MrGreen)-[:HAS_ROLE]->(FE),
(MrGreen)-[:HAS_ROLE]->(Architect),
(Polon)-[:HAS_ROLE]->(FE)

CREATE
(MrGreen)-[:HAS_PROJECT]->(ProjectDCX),
(Polon)-[:HAS_PROJECT]->(ProjectDCX)

CREATE
(MrGreen)-[:HAS_RATE]->(SeniorRate),
(Polon)-[:HAS_RATE]->(SeniorRate)

CREATE
(Department207400)-[:MANAGED_BY]->(MrGreen),
(MrGreen)-[:HAS_DEPARTMENT]->(Department207400),
(Polon)-[:HAS_DEPARTMENT]->(Department207400)