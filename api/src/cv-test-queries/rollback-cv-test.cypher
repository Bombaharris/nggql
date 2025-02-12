MATCH (nodes)
  WHERE nodes.id IN ["Kate", "ProjectCV", "e1", "e2", "e3", "e4", "e5"]
FOREACH (node IN nodes | DETACH DELETE node)
RETURN nodes

MATCH (node)
  WHERE node.id IS NULL
DELETE node
