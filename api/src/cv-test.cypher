// up (run one block after block)
CREATE (p:Person {
  id: "Kate",
  name:"Kate",
  surname:"Vite",
  birthday: "1985-03-06",
  seniority: "JUNIOR",
  location: point({longitude: 52, latitude: 16}),
  bio: "Pracował jako lider zespołu z kilkuletnim doświadczeniem w prowadzeniu zespołu 4 programistów. Obecnie koncentruje się na utrzymaniu i rozwoju aplikacji zapewniających wsparcie w zarządzaniu produktami bankowymi. Świetny w komunikacji i znajdowaniu różnych rozwiązań. Zawsze chętny do nauki i rozwijania nowych umiejętności. "
})

MATCH(p:Person {id: "Kate"})
UNWIND ["React", "Angular", "JavaScript", "Wordpress", "Docker", "CSS", "HTML", "TypeScript", "SASS", "Linux", "Git"] AS skillName
MERGE (s:Skill { name: skillName })
CREATE (p)-[:HAS_SKILL]->(s)

CREATE (pr:Project {
  id: "ProjectCV",
  name: "ProjectCV",
  startedFrom: "2025-02-11",
  duration: duration({days: 1})
})
WITH pr
UNWIND ["React", "Angular", "JavaScript"] AS reqSkill
MERGE (rs:Skill { name: reqSkill })
CREATE (pr)-[:NEED_SKILL]->(rs)

MATCH(p:Person {id: "Kate"}), (pr:Project {id: "ProjectCV"})
WITH p, pr
UNWIND [
  {
    addSkills: true,
    id: "e1",
    type: "PROJECT",
    name: "Aplikacja e-commerce",
    role: "Frontend developer",
    startedFrom: "2021-06-11",
    description: "Tworzenie nowoczesnej aplikacji do zakupów online. Projekt obejmował integrację z systemami płatności, zarządzanie koszykiem zakupowym oraz personalizację interfejsu użytkownika. Tworzenie responsywnych i intuicyjnych stron przy użyciu HTML, CSS i JavaScript. Współpraca z zespołem back-endowym w celu integracji zewnętrznych API do pobierania danych o produktach, zarządzania koszykiem i realizacji płatności. Zapewnienie szybkiego ładowania stron i płynnej nawigacji, a także przeprowadzanie testów jednostkowych i integracyjnych."
  },
  {
    addSkills: true,
    id: "e2",
    type: "DEFAULT",
    role: "Senior Frontend Developer",
    institution: "Onwelo",
    startedFrom: "2021-06-11",
    description: "Tworzenie nowoczesnych aplikacji webowych w React, TypeScript i Next.js Optymalizacja wydajności i dostępności interfejsów użytkownika Projektowanie komponentów UI i systemów designowych Współpraca z zespołami backendowymi oraz UX/UI Mentoring młodszych programistów, code review i wdrażanie dobrych praktyk"
  },
  {
    addSkills: true,
    id: "e3",
    type: "EDUCATION",
    name: "Mgr. Informatyki, specjalizacja: Systemy Przemysłowe",
    institution: "Politechnika Warszawska",
    startedFrom: "2016",
    gainedAt: "2018",
    description: "Solidne podstawy algorytmiki, struktur danych i programowania Projekty zespołowe z zakresu aplikacji webowych i mobilnych Praca dyplomowa na temat optymalizacji wydajności aplikacji frontendowych"
  },
  {
    addSkills: true,
    id: "e4",
    type: "COURSE",
    name: "Frontend Developer Bootcamp",
    institution: "Infoshare Academy",
    startedFrom: "2016",
    description: "Absolwent intensywnego bootcampu Frontend Developer w infoShare Academy (240h), gdzie zdobył kompleksowe umiejętności w tworzeniu nowoczesnych aplikacji internetowych. Wykorzystując HTML, CSS, JavaScript oraz React, tworzył responsywne strony internetowe (RWD) i komunikował się z API."
  },
  {
    addSkills: false,
    id: "e5",
    type: "HOBBY",
    name: "Fishing"
  }
] AS expData
CREATE (e:Experience {
  id: expData.id,
  type: expData.type,
  name: expData.name,
  role: expData.role,
  description: expData.description,
  institution: expData.institution,
  startedFrom: expData.startedFrom,
  gainedAt: expData.gainedAt
})
CREATE (p)-[:HAS_EXPERIENCE]->(e)
WITH e, expData
  WHERE expData.addSkills = true
UNWIND ["React", "Angular", "JavaScript"] AS usedSkill
MERGE (us:Skill { name: usedSkill })
CREATE (e)-[:USED_SKILL]->(us)

//down
MATCH (nodes)
WHERE nodes.id IN ["Kate", "ProjectCV", "e1", "e2", "e3", "e4", "e5"]
FOREACH (node IN nodes | DETACH DELETE node)
RETURN nodes

MATCH (node)
WHERE node.id is null
delete node

// recommendation query
match (project:Project { id: "ProjectCV"})
match (p:Person)-[:HAS_EXPERIENCE]->(e:Experience)-[:USED_SKILL]->(s:Skill)<-[:NEED_SKILL]-(pr:Project)
with p, s, e,
case
  when e.gainedAt is null then duration.inMonths(date(e.startedFrom), date()).months
  else duration.inMonths(date(e.startedFrom), date(e.gainedAt)).months
end as experience
return p.name, sum(experience)
