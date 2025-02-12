MATCH (project:Project { id: "ProjectCV"})
MATCH (p:Person)-[:HAS_EXPERIENCE]->(e:Experience)-[:USED_SKILL]->(s:Skill)<-[:NEED_SKILL]-(pr:Project)
WITH p, s, e,
CASE
  WHEN e.gainedAt IS NULL THEN duration.inMonths(date(e.startedFrom), date()).months
  ELSE duration.inMonths(date(e.startedFrom), date(e.gainedAt)).months
END AS experience
RETURN p.name, sum(experience)
