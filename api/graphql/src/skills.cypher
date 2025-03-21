CREATE(LangGroup:SkillGroup { id: "Languages", name: "Languages" })
CREATE(:Skill { id: "English", name: "English" })-[:BELONGS_TO]->(LangGroup)
CREATE(:Skill { id: "Polish", name: "Polish" })-[:BELONGS_TO]->(LangGroup)

CREATE(TechGroup:SkillGroup { id: "Technologies", name: "Technologies" })

CREATE(Tools:SkillGroup { id: "Tools", name: "Tools" })-[:BELONGS_TO]->(TechGroup)
CREATE(Frontend:SkillGroup { id: "Frontend", name: "Frontend" })-[:BELONGS_TO]->(TechGroup)
CREATE(Backend:SkillGroup { id: "Backend", name: "Backend" })-[:BELONGS_TO]->(TechGroup)
CREATE(DevOps:SkillGroup { id: "DevOps", name: "DevOps" })-[:BELONGS_TO]->(TechGroup)
CREATE(AI:SkillGroup { id: "AI", name: "AI" })-[:BELONGS_TO]->(TechGroup)

CREATE (Pandas:Skill {id: "Pandas", name: "Pandas"})-[:BELONGS_TO]->(Backend)
CREATE (Spacy:Skill {id: "Spacy", name: "Spacy"})-[:BELONGS_TO]->(Backend)
CREATE (Keras:Skill {id: "Keras", name: "Keras"})-[:BELONGS_TO]->(Backend)
CREATE (NLTK:Skill {id: "NLTK", name: "NLTK"})-[:BELONGS_TO]->(Backend)
CREATE (TensorFlow:Skill {id: "TensorFlow", name: "TensorFlow"})-[:BELONGS_TO]->(AI)
CREATE (NumPy:Skill {id: "NumPy", name: "NumPy"})-[:BELONGS_TO]->(Backend)
CREATE (BERT:Skill {id: "BERT", name: "BERT"})-[:BELONGS_TO]->(Backend)
CREATE (Scikitlearn:Skill {id: "Scikit-learn", name: "Scikit-learn"})-[:BELONGS_TO]->(AI)
CREATE (PyTorch:Skill {id: "PyTorch", name: "PyTorch"})-[:BELONGS_TO]->(AI)
CREATE (GPT:Skill {id: "GPT", name: "GPT"})-[:BELONGS_TO]->(AI)
CREATE (OpenCV:Skill {id: "OpenCV", name: "OpenCV"})-[:BELONGS_TO]->(AI)
CREATE (YOLO:Skill {id: "YOLO", name: "YOLO"})-[:BELONGS_TO]->(Backend)
CREATE (Rust:Skill {id: "Rust", name: "Rust"})-[:BELONGS_TO]->(Backend)
CREATE (MySQL:Skill {id: "MySQL", name: "MySQL"})-[:BELONGS_TO]->(Backend)
CREATE (ApacheKafka:Skill {id: "ApacheKafka", name: "Apache Kafka"})-[:BELONGS_TO]->(Backend)
CREATE (Hibernate:Skill {id: "Hibernate", name: "Hibernate"})-[:BELONGS_TO]->(Backend)
CREATE (Kubernetes:Skill {id: "Kubernetes", name: "Kubernetes"})-[:BELONGS_TO]->(DevOps)
CREATE (ASPNET:Skill {id: "ASP.NET", name: "ASP.NET"})-[:BELONGS_TO]->(Backend)
CREATE (GraphQL:Skill {id: "GraphQL", name: "GraphQL"})-[:BELONGS_TO]->(Backend)
CREATE (Django:Skill {id: "Django", name: "Django"})-[:BELONGS_TO]->(Backend)
CREATE (Laravel:Skill {id: "Laravel", name: "Laravel"})-[:BELONGS_TO]->(Backend)
CREATE (Phoenix:Skill {id: "Phoenix", name: "Phoenix"})-[:BELONGS_TO]->(Backend)
CREATE (Elasticsearch:Skill {id: "Elasticsearch", name: "Elasticsearch"})-[:BELONGS_TO]->(Backend)
CREATE (Flask:Skill {id: "Flask", name: "Flask"})-[:BELONGS_TO]->(Backend)
CREATE (Kotlin:Skill {id: "Kotlin", name: "Kotlin"})-[:BELONGS_TO]->(Backend)
CREATE (Scala:Skill {id: "Scala", name: "Scala"})-[:BELONGS_TO]->(Backend)
CREATE (FastAPI:Skill {id: "FastAPI", name: "FastAPI"})-[:BELONGS_TO]->(Backend)
CREATE (SpringBoot:Skill {id: "SpringBoot", name: "Spring Boot"})-[:BELONGS_TO]->(Backend)
CREATE (Docker:Skill {id: "Docker", name: "Docker"})-[:BELONGS_TO]->(DevOps)
CREATE (Spring:Skill {id: "Spring", name: "Spring"})-[:BELONGS_TO]->(Backend)
CREATE (SQLServer:Skill {id: "SQLServer", name: "SQL Server"})-[:BELONGS_TO]->(Backend)
CREATE (PHP:Skill {id: "PHP", name: "PHP"})-[:BELONGS_TO]->(Backend)
CREATE (Redis:Skill {id: "Redis", name: "Redis"})-[:BELONGS_TO]->(Backend)
CREATE (Java:Skill {id: "Java", name: "Java"})-[:BELONGS_TO]->(Backend)
CREATE (Ruby:Skill {id: "Ruby", name: "Ruby"})-[:BELONGS_TO]->(Backend)
CREATE (MongoDB:Skill {id: "MongoDB", name: "MongoDB"})-[:BELONGS_TO]->(Backend)
CREATE (Nodejs:Skill {id: "Node.js", name: "Node.js"})-[:BELONGS_TO]->(Backend)
CREATE (RabbitMQ:Skill {id: "RabbitMQ", name: "RabbitMQ"})-[:BELONGS_TO]->(Backend)
CREATE (Microservices:Skill {id: "Microservices", name: "Microservices"})-[:BELONGS_TO]->(Backend)
CREATE (Go:Skill {id: "Go", name: "Go"})-[:BELONGS_TO]->(Backend)
CREATE (Falcon:Skill {id: "Falcon", name: "Falcon"})-[:BELONGS_TO]->(Backend)
CREATE (RESTfulAPIs:Skill {id: "RESTfulAPIs", name: "RESTful APIs"})-[:BELONGS_TO]->(Backend)
CREATE (PostgreSQL:Skill {id: "PostgreSQL", name: "PostgreSQL"})-[:BELONGS_TO]->(Backend)
CREATE (CSharp:Skill {id: "C#", name: "C#"})-[:BELONGS_TO]->(Backend)
CREATE (Express:Skill {id: "Express", name: "Express"})-[:BELONGS_TO]->(Backend)
CREATE (Python:Skill {id: "Python", name: "Python"})-[:BELONGS_TO]->(Backend)
CREATE (Elastic:Skill {id: "Elastic", name: "Elastic"})-[:BELONGS_TO]->(Backend)
CREATE (BigQuery:Skill {id: "BigQuery", name: "BigQuery"})-[:BELONGS_TO]->(Backend)
CREATE (Data:Skill {id: "Data", name: "Data"})-[:BELONGS_TO]->(Backend)
CREATE (AWS:Skill {id: "AWS", name: "AWS"})-[:BELONGS_TO]->(DevOps)
CREATE (Apache:Skill {id: "Apache", name: "Apache"})-[:BELONGS_TO]->(DevOps)
CREATE (Spark:Skill {id: "Spark", name: "Spark"})-[:BELONGS_TO]->(DevOps)
CREATE (Hadoop:Skill {id: "Hadoop", name: "Hadoop"})-[:BELONGS_TO]->(DevOps)
CREATE (Couchbase:Skill {id: "Couchbase", name: "Couchbase"})-[:BELONGS_TO]->(DevOps)
CREATE (Ansible:Skill {id: "Ansible", name: "Ansible"})-[:BELONGS_TO]->(DevOps)
CREATE (DigitalOcean:Skill {id: "DigitalOcean", name: "DigitalOcean"})-[:BELONGS_TO]->(DevOps)
CREATE (IBM:Skill {id: "IBM", name: "IBM"})-[:BELONGS_TO]->(DevOps)
CREATE (Terraform:Skill {id: "Terraform", name: "Terraform"})-[:BELONGS_TO]->(DevOps)
CREATE (Puppet:Skill {id: "Puppet", name: "Puppet"})-[:BELONGS_TO]->(DevOps)
CREATE (Oracle:Skill {id: "Oracle", name: "Oracle"})-[:BELONGS_TO]->(DevOps)
CREATE (Azure:Skill {id: "Azure", name: "Azure"})-[:BELONGS_TO]->(DevOps)
CREATE (OpenShift:Skill {id: "OpenShift", name: "OpenShift"})-[:BELONGS_TO]->(DevOps)
CREATE (Chef:Skill {id: "Chef", name: "Chef"})-[:BELONGS_TO]->(DevOps)
CREATE (Google:Skill {id: "Google", name: "Google"})-[:BELONGS_TO]->(Tools)
CREATE (Heroku:Skill {id: "Heroku", name: "Heroku"})-[:BELONGS_TO]->(DevOps)
CREATE (CloudFormation:Skill {id: "CloudFormation", name: "CloudFormation"})-[:BELONGS_TO]->(DevOps)
CREATE (NoSQL:Skill {id: "NoSQL", name: "NoSQL"})-[:BELONGS_TO]->(Backend)
CREATE (Neo4j:Skill {id: "Neo4j", name: "Neo4j"})-[:BELONGS_TO]->(Backend)
CREATE (SQL:Skill {id: "SQL", name: "SQL"})-[:BELONGS_TO]->(Backend)
CREATE (Firebase:Skill {id: "Firebase", name: "Firebase"})-[:BELONGS_TO]->(Backend)
CREATE (OracleDB:Skill {id: "OracleDB", name: "OracleDB"})-[:BELONGS_TO]->(Backend)
CREATE (SQLite:Skill {id: "SQLite", name: "SQLite"})-[:BELONGS_TO]->(Backend)
CREATE (Cassandra:Skill {id: "Cassandra", name: "Cassandra"})-[:BELONGS_TO]->(Backend)
CREATE (HBase:Skill {id: "HBase", name: "HBase"})-[:BELONGS_TO]->(Backend)
CREATE (MariaDB:Skill {id: "MariaDB", name: "MariaDB"})-[:BELONGS_TO]->(Backend)
CREATE (DynamoDB:Skill {id: "DynamoDB", name: "DynamoDB"})-[:BELONGS_TO]->(Backend)
CREATE (Datadog:Skill {id: "Datadog", name: "Datadog"})-[:BELONGS_TO]->(DevOps)
CREATE (Octopus:Skill {id: "Octopus", name: "Octopus"})-[:BELONGS_TO]->(DevOps)
CREATE (TeamCity:Skill {id: "TeamCity", name: "TeamCity"})-[:BELONGS_TO]->(DevOps)
CREATE (Splunk:Skill {id: "Splunk", name: "Splunk"})-[:BELONGS_TO]->(DevOps)
CREATE (CircleCI:Skill {id: "CircleCI", name: "CircleCI"})-[:BELONGS_TO]->(DevOps)
CREATE (GitLab:Skill {id: "GitLab", name: "GitLab"})-[:BELONGS_TO]->(DevOps)
CREATE (Jenkins:Skill {id: "Jenkins", name: "Jenkins"})-[:BELONGS_TO]->(DevOps)
CREATE (New:Skill {id: "New", name: "New"})-[:BELONGS_TO]->(DevOps)
CREATE (Prometheus:Skill {id: "Prometheus", name: "Prometheus"})-[:BELONGS_TO]->(DevOps)
CREATE (Bamboo:Skill {id: "Bamboo", name: "Bamboo"})-[:BELONGS_TO]->(DevOps)
CREATE (CICD:Skill {id: "CI/CD", name: "CI/CD"})-[:BELONGS_TO]->(DevOps)
CREATE (Travis:Skill {id: "Travis", name: "Travis"})-[:BELONGS_TO]->(DevOps)
CREATE (ELK:Skill {id: "ELK", name: "ELK"})-[:BELONGS_TO]->(DevOps)
CREATE (Grafana:Skill {id: "Grafana", name: "Grafana"})-[:BELONGS_TO]->(DevOps)
CREATE (Nagios:Skill {id: "Nagios", name: "Nagios"})-[:BELONGS_TO]->(DevOps)
CREATE (RxJS:Skill {id: "RxJS", name: "RxJS"})-[:BELONGS_TO]->(Frontend)
CREATE (HTML5:Skill {id: "HTML5", name: "HTML5"})-[:BELONGS_TO]->(Frontend)
CREATE (Nuxtjs:Skill {id: "Nuxt.js", name: "Nuxt.js"})-[:BELONGS_TO]->(Frontend)
CREATE (Webpack:Skill {id: "Webpack", name: "Webpack"})-[:BELONGS_TO]->(Frontend)
CREATE (Bootstrap:Skill {id: "Bootstrap", name: "Bootstrap"})-[:BELONGS_TO]->(Frontend)
CREATE (SASS:Skill {id: "SASS", name: "SASS"})-[:BELONGS_TO]->(Frontend)
CREATE (Gatsby:Skill {id: "Gatsby", name: "Gatsby"})-[:BELONGS_TO]->(Frontend)
CREATE (Nextjs:Skill {id: "Next.js", name: "Next.js"})-[:BELONGS_TO]->(Frontend)
CREATE (MaterialUI:Skill {id: "Material-UI", name: "Material-UI"})-[:BELONGS_TO]->(Frontend)
CREATE (Vuejs:Skill {id: "Vue.js", name: "Vue.js"})-[:BELONGS_TO]->(Frontend)
CREATE (Angular:Skill {id: "Angular", name: "Angular"})-[:BELONGS_TO]->(Frontend)
CREATE (ResponsiveDesign:Skill {id: "ResponsiveDesign", name: "Responsive Design"})-[:BELONGS_TO]->(Frontend)
CREATE (JavaScript:Skill {id: "JavaScript", name: "JavaScript"})-[:BELONGS_TO]->(Frontend)
CREATE (Redux:Skill {id: "Redux", name: "Redux"})-[:BELONGS_TO]->(Frontend)
CREATE (PerformanceOptimization:Skill {id: "PerformanceOptimization", name: "Performance Optimization"})-[:BELONGS_TO]->(Frontend)
CREATE (LESS:Skill {id: "LESS", name: "LESS"})-[:BELONGS_TO]->(Frontend)
CREATE (Tailwind:Skill {id: "Tailwind", name: "Tailwind"})-[:BELONGS_TO]->(Frontend)
CREATE (Emberjs:Skill {id: "Ember.js", name: "Ember.js"})-[:BELONGS_TO]->(Frontend)
CREATE (Responsive:Skill {id: "Responsive", name: "Responsive"})-[:BELONGS_TO]->(Frontend)
CREATE (TailwindCSS:Skill {id: "TailwindCSS", name: "Tailwind CSS"})-[:BELONGS_TO]->(Frontend)
CREATE (React:Skill {id: "React", name: "React"})-[:BELONGS_TO]->(Frontend)
CREATE (PWA:Skill {id: "PWA", name: "PWA"})-[:BELONGS_TO]->(Frontend)
CREATE (Accessibility:Skill {id: "Accessibility", name: "Accessibility"})-[:BELONGS_TO]->(Frontend)
CREATE (MobX:Skill {id: "MobX", name: "MobX"})-[:BELONGS_TO]->(Frontend)
CREATE (TypeScript:Skill {id: "TypeScript", name: "TypeScript"})-[:BELONGS_TO]->(Frontend)
CREATE (PWADevelopment:Skill {id: "PWADevelopment", name: "PWA Development"})-[:BELONGS_TO]->(Frontend)
CREATE (Svelte:Skill {id: "Svelte", name: "Svelte"})-[:BELONGS_TO]->(Frontend)
CREATE (CSS3:Skill {id: "CSS3", name: "CSS3"})-[:BELONGS_TO]->(Frontend)
CREATE (Firewalls:Skill {id: "Firewalls", name: "Firewalls"})-[:BELONGS_TO]->(Frontend)
CREATE (DNS:Skill {id: "DNS", name: "DNS"})-[:BELONGS_TO]->(Frontend)
CREATE (DHCP:Skill {id: "DHCP", name: "DHCP"})-[:BELONGS_TO]->(Frontend)
CREATE (SSH:Skill {id: "SSH", name: "SSH"})-[:BELONGS_TO]->(Frontend)
CREATE (Network:Skill {id: "Network", name: "Network"})-[:BELONGS_TO]->(Frontend)
CREATE (FTP:Skill {id: "FTP", name: "FTP"})-[:BELONGS_TO]->(Frontend)
CREATE (UDP:Skill {id: "UDP", name: "UDP"})-[:BELONGS_TO]->(Frontend)
CREATE (VPN:Skill {id: "VPN", name: "VPN"})-[:BELONGS_TO]->(Frontend)
CREATE (TCPIP:Skill {id: "TCP/IP", name: "TCP/IP"})-[:BELONGS_TO]->(Frontend)
CREATE (HTTPS:Skill {id: "HTTP/S", name: "HTTP/S"})-[:BELONGS_TO]->(Frontend)
CREATE (Load:Skill {id: "Load", name: "Load"})
CREATE (Debian:Skill {id: "Debian", name: "Debian"})
CREATE (Red:Skill {id: "Red", name: "Red"})
CREATE (CentOS:Skill {id: "CentOS", name: "CentOS"})
CREATE (macOS:Skill {id: "macOS", name: "macOS"})
CREATE (Linux:Skill {id: "Linux", name: "Linux"})
CREATE (Unix:Skill {id: "Unix", name: "Unix"})
CREATE (Ubuntu:Skill {id: "Ubuntu", name: "Ubuntu"})
CREATE (Windows:Skill {id: "Windows", name: "Windows"})
CREATE (PowerShell:Skill {id: "PowerShell", name: "PowerShell"})
CREATE (Shell:Skill {id: "Shell", name: "Shell"})
CREATE (Perl:Skill {id: "Perl", name: "Perl"})
CREATE (Bash:Skill {id: "Bash", name: "Bash"})
CREATE (IAM:Skill {id: "IAM", name: "IAM"})
CREATE (Cryptography:Skill {id: "Cryptography", name: "Cryptography"})
CREATE (IDSIPS:Skill {id: "IDS/IPS", name: "IDS/IPS"})
CREATE (Vulnerability:Skill {id: "Vulnerability", name: "Vulnerability"})
CREATE (OWASP:Skill {id: "OWASP", name: "OWASP"})
CREATE (PCI:Skill {id: "PCI", name: "PCI"})
CREATE (SSLTLS:Skill {id: "SSL/TLS", name: "SSL/TLS"})
CREATE (Penetration:Skill {id: "Penetration", name: "Penetration"})
CREATE (ISO:Skill {id: "ISO", name: "ISO"})
CREATE (SIEM:Skill {id: "SIEM", name: "SIEM"})
CREATE (Git:Skill {id: "Git", name: "Git"})
CREATE (SVN:Skill {id: "SVN", name: "SVN"})
CREATE (GitHub:Skill {id: "GitHub", name: "GitHub"})
CREATE (Mercurial:Skill {id: "Mercurial", name: "Mercurial"})
CREATE (Perforce:Skill {id: "Perforce", name: "Perforce"})
CREATE (Bitbucket:Skill {id: "Bitbucket", name: "Bitbucket"});

MATCH (ProjectAngular:Project {id: "ProjectAngular",name:"ProjectAngular"}),
(ProjectVue:Project {id: "ProjectVue", name:"ProjectVue"}),
(ProjectJava:Project {id: "ProjectJava", name:"ProjectJava"}),
(Docker:Skill {id: "Docker", name: "Docker"}), (Java:Skill {id: "Java", name: "Java"}), (AWS:Skill {id: "AWS", name: "AWS"}), (HTML5:Skill {id: "HTML5", name: "HTML5"}), (Vuejs:Skill {id: "Vue.js", name: "Vue.js"}), (Angular:Skill {id: "Angular", name: "Angular"}), (JavaScript:Skill {id: "JavaScript", name: "JavaScript"}), (React:Skill {id: "React", name: "React"}), (TypeScript:Skill {id: "TypeScript", name: "TypeScript"}), (CSS3:Skill {id: "CSS3", name: "CSS3"}), (Linux:Skill {id: "Linux", name: "Linux"}), (Git:Skill {id: "Git", name: "Git"})
CREATE (ProjectAngular)-[:NEED_SKILL]->(Angular)
CREATE (ProjectAngular)-[:NEED_SKILL]->(CSS3)
CREATE (ProjectAngular)-[:NEED_SKILL]->(TypeScript)
CREATE (ProjectVue)-[:NEED_SKILL]->(Vuejs)
CREATE (ProjectVue)-[:NEED_SKILL]->(TypeScript)
CREATE (ProjectVue)-[:NEED_SKILL]->(Docker)
CREATE (ProjectJava)-[:NEED_SKILL]->(Java)
CREATE (ProjectJava)-[:NEED_SKILL]->(Angular);


MATCH (MrGreen:Person {
    id: "MrGreen",
    name:"Ralph",
    surname:"Green",
    birthday: "1981-12-30",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
}), (Polon:Person {
    id: "Polon",
    name:"Camil",
    surname:"Polon",
    birthday: "1988-11-10",
    seniority: "SENIOR",
    location: point({longitude: 51, latitude: 21})
}), (Gocha:Person {
    id: "Gocha",
    name:"Margaret",
    surname:"Stas",
    birthday: "1990-02-08",
    seniority: "REGULAR",
    location: point({longitude: 51, latitude: 21})
}), (Sofia:Person {
    id: "Sofia",
    name:"Sofia",
    surname:"Loren",
    birthday: "1992-04-12",
    seniority: "JUNIOR",
    location: point({longitude: 51, latitude: 21})
}), (Alex:Person {
    id: "Alex",
    name:"Alex",
    surname:"Ross",
    birthday: "1992-12-03",
    seniority: "REGULAR",
    location: point({longitude: 51, latitude: 19})
}), (Finger:Person {
    id: "Finger",
    name:"Dominic",
    surname:"Finger",
    birthday: "1989-11-13",
    seniority: "SENIOR",
    location: point({longitude: 52, latitude: 16})
}), (Ivan:Person {
    id: "Ivan",
    name:"Andrew",
    surname:"Ivanesco",
    birthday: "1985-03-06",
    seniority: "SENIOR",
    location: point({longitude: 52, latitude: 16})
}),
(Java:Skill {id: "Java", name: "Java"}),
(AWS:Skill {id: "AWS", name: "AWS"}),
(HTML5:Skill {id: "HTML5", name: "HTML5"}),
(Vuejs:Skill {id: "Vue.js", name: "Vue.js"}),
(Angular:Skill {id: "Angular", name: "Angular"}),
(JavaScript:Skill {id: "JavaScript", name: "JavaScript"}),
(React:Skill {id: "React", name: "React"}),
(TypeScript:Skill {id: "TypeScript", name: "TypeScript"}),
(CSS3:Skill {id: "CSS3", name: "CSS3"}),
(Linux:Skill {id: "Linux", name: "Linux"}),
(Git:Skill {id: "Git", name: "Git"})
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(CSS3)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(AWS)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(HTML5)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Git)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'JUNIOR'}]->(Java)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(JavaScript)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(TypeScript)
CREATE (MrGreen)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Linux)
CREATE (Polon)-[:HAS_SKILL {seniority: 'REGULAR'}]->(JavaScript)
CREATE (Polon)-[:HAS_SKILL {seniority: 'REGULAR'}]->(TypeScript)
CREATE (Polon)-[:HAS_SKILL {seniority: 'REGULAR'}]->(Java)
CREATE (Gocha)-[:HAS_SKILL {seniority: 'SENIOR'}]->(React)
CREATE (Sofia)-[:HAS_SKILL {seniority: 'JUNIOR'}]->(React)
CREATE (Ivan)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Java)
CREATE (Ivan)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular)
CREATE (Finger)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Java)
CREATE (Finger)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular)
CREATE (Alex)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Angular)
CREATE (Alex)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Vuejs)
CREATE (Alex)-[:HAS_SKILL {seniority: 'SENIOR'}]->(Java);
