CREATE (MrGreen:Person {
    id: "MrGreen",
    name:"Ralph",
    surname:"Green",
    birthday: "1981-12-30",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
})
CREATE (Polon:Person {
    id: "Polon",
    name:"Camil",
    surname:"Polon",
    birthday: "1988-11-10",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
})
CREATE (Zub:Person {
    id: "Zub",
    name:"Michael",
    surname:"Zubenstein",
    birthday: "1981-06-07",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
})
CREATE (Gocha:Person {
    id: "Gocha",
    name:"Margaret",
    surname:"Stas",
    birthday: "1990-02-08",
    seniority: "REGULAR",
    location: point({longitude: 51, latitude: 21})
})
CREATE (Sofia:Person {
    id: "Sofia",
    name:"Sofia",
    surname:"Loren",
    birthday: "1992-04-12",
    seniority: "JUNIOR",
    location: point({longitude: 51, latitude: 21})
})
CREATE (Alex:Person {
    id: "Alex",
    name:"Alex",
    surname:"Ross",
    birthday: "1992-12-03",
    seniority: "REGULAR",
    location: point({longitude: 51, latitude: 19})
})
CREATE (Finger:Person {
    id: "Finger",
    name:"Dominic",
    surname:"Finger",
    birthday: "1989-11-13",
    seniority: "SENIOR",
    location: point({longitude: 52, latitude: 16})
})
CREATE (Ivan:Person {
    id: "Ivan",
    name:"Andrew",
    surname:"Ivanesco",
    birthday: "1985-03-06",
    seniority: "SENIOR",
    location: point({longitude: 52, latitude: 16})
})


CREATE (ProjectAngular:Project {
    id: "ProjectAngular",
    name:"ProjectAngular",
    startedFrom: "2022-01-01",
    duration: 'P1Y'
})
CREATE (ProjectVue:Project {
    id: "ProjectVue",
    name:"ProjectVue",
    startedFrom: "2020-01-01",
    duration: duration({months: 12})
})
CREATE (ProjectJava:Project {
    id: "ProjectJava",
    name:"ProjectJava",
    startedFrom: "2021-06-01",
    duration: duration({months: 48})
})

CREATE (Angular:Skill {id: "Angular", name:"Angular"})
CREATE (Vue:Skill {id: "Vue", name:"Vue"})
CREATE (React:Skill {id: "React", name:"React"})
CREATE (Aws:Skill {id: "AWS", name:"AWS"})
CREATE (Css:Skill {id: "CSS", name:"CSS"})
CREATE (Docker:Skill {id: "Docker", name:"Docker"})
CREATE (Html:Skill {id: "HTML", name:"HTML"})
CREATE (Git:Skill {id: "Git", name:"Git"})
CREATE (Java:Skill {id: "Java", name:"Java"})
CREATE (JavaScript:Skill {id: "JavaScript", name:"JavaScript"})
CREATE (TypeScript:Skill {id: "TypeScript", name:"TypeScript"})
CREATE (Linux:Skill {id: "Linux", name:"Linux"})

CREATE
(ProjectAngular)-[:NEED_SKILL]->(Angular),
(ProjectAngular)-[:NEED_SKILL]->(Css),
(ProjectAngular)-[:NEED_SKILL]->(TypeScript),
(ProjectVue)-[:NEED_SKILL]->(Vue),
(ProjectVue)-[:NEED_SKILL]->(TypeScript),
(ProjectVue)-[:NEED_SKILL]->(Docker),
(ProjectJava)-[:NEED_SKILL]->(Java),
(ProjectJava)-[:NEED_SKILL]->(Angular)

CREATE (FE:Role {id: "Frontend Developer", name:"Frontend Developer"})
CREATE (Architect:Role {id: "Architect", name:"Architect"})

CREATE (Department207400:Department {id: "207400", name:"Frontend"})

CREATE (SeniorRate:Rate {id: "SeniorRate",validFrom: "2017-01-01", value: 1000})
CREATE (RegularRate:Rate {id: "RegularRate",validFrom: "2017-01-01", value: 800})
CREATE (JuniorRate:Rate {id: "JuniorRate",validFrom: "2017-01-01", value: 600})

CREATE
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Aws),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Css),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Html),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Git),
(MrGreen)-[:HAS_SKILL {seniority: 'JUNIOR'}]->(Java),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(JavaScript),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(TypeScript),
(MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Linux),
(Polon)-[:HAS_SKILL {seniority: 'REGULAR'}]->(JavaScript),
(Polon)-[:HAS_SKILL {seniority: 'REGULAR'}]->(TypeScript),
(Polon)-[:HAS_SKILL {seniority: 'REGULAR'}]->(Java),
(Gocha)-[:HAS_SKILL {seniority: 'SENIOR'}]->(React),
(Sofia)-[:HAS_SKILL {seniority: 'JUNIOR'}]->(React),
(Ivan)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Java),
(Ivan)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular),
(Finger)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Java),
(Finger)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular),
(Alex)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular),
(Alex)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Vue),
(Alex)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Java)

// To Create skill at once
// MATCH
//   (person:Person {id: 'Zub'}),
//   (skill:Skill)
// CREATE (person)-[r:HAS_SKILL {seniority: 'SENIOR'}]->(skill)
// RETURN skill

CREATE
(MrGreen)-[:HAS_ROLE]->(FE),
(MrGreen)-[:HAS_ROLE]->(Architect),
(Polon)-[:HAS_ROLE]->(FE),
(Zub)-[:HAS_ROLE]->(FE),
(Alex)-[:HAS_ROLE]->(FE),
(Gocha)-[:HAS_ROLE]->(FE),
(Sofia)-[:HAS_ROLE]->(FE),
(Ivan)-[:HAS_ROLE]->(FE),
(Finger)-[:HAS_ROLE]->(FE)


CREATE
(MrGreen)-[:HAS_PROJECT]->(ProjectAngular),
(Polon)-[:HAS_PROJECT]->(ProjectAngular),
(Zub)-[:HAS_PROJECT]->(ProjectVue),
(Gocha)-[:HAS_PROJECT]->(ProjectVue),
(Ivan)-[:HAS_PROJECT]->(ProjectJava),
(Finger)-[:HAS_PROJECT]->(ProjectJava)


CREATE
(MrGreen)-[:HAS_RATE]->(SeniorRate),
(Polon)-[:HAS_RATE]->(SeniorRate),
(Zub)-[:HAS_RATE]->(SeniorRate),
(Alex)-[:HAS_RATE]->(SeniorRate),
(Sofia)-[:HAS_RATE]->(JuniorRate),
(Gocha)-[:HAS_RATE]->(RegularRate),
(Ivan)-[:HAS_RATE]->(SeniorRate),
(Finger)-[:HAS_RATE]->(SeniorRate)


CREATE
(Department207400)-[:MANAGED_BY]->(MrGreen),
(MrGreen)-[:HAS_DEPARTMENT]->(Department207400),
(Polon)-[:HAS_DEPARTMENT]->(Department207400),
(Zub)-[:HAS_DEPARTMENT]->(Department207400),
(Sofia)-[:HAS_DEPARTMENT]->(Department207400),
(Gocha)-[:HAS_DEPARTMENT]->(Department207400),
(Ivan)-[:HAS_DEPARTMENT]->(Department207400),
(Finger)-[:HAS_DEPARTMENT]->(Department207400),
(Alex)-[:HAS_DEPARTMENT]->(Department207400)

// Create unique node property constraints to ensure that property values are unique for all nodes with a specific label.
// CREATE CONSTRAINT FOR (p:Person) REQUIRE (p.id) IS UNIQUE
// CREATE CONSTRAINT FOR (e:Experience) REQUIRE (e.id) IS UNIQUE
// CREATE CONSTRAINT FOR (s:Skill) REQUIRE (s.id) IS UNIQUE
// CREATE CONSTRAINT FOR (r:Role) REQUIRE (r.id) IS UNIQUE
// CREATE CONSTRAINT FOR (pr:Project) REQUIRE (pr.id) IS UNIQUE
// CREATE CONSTRAINT FOR (d:Department) REQUIRE (d.id) IS UNIQUE
// CREATE CONSTRAINT FOR (rt:Rate) REQUIRE (rt.id) IS UNIQUE

// Create indexes on one or more properties for all nodes that have a given label. Indexes are used to increase search performance.
// CREATE INDEX FOR (p:Project) ON (p.startedFrom)


// Find people to the job
// MATCH (p:Person)-[:HAS_SKILL {seniority: 'SENIOR'}]->(skill:Skill)<-[:NEED_SKILL]-(pr:Project)
// RETURN p,pr,skill