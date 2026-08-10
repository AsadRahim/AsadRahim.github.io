---
layout: single
title: "Resume"
permalink: /resume/
author_profile: true
classes: wide
---

# Muhammad Asad Rahim

**Full Stack Developer & AI Engineer | Software Architecture | FastAPI/Flask | AWS/GCP | LLM/RAG & MCP**

<p>
  <a href="/assets/files/resume.pdf" class="btn btn--primary" download>Download PDF Resume</a>
  <a href="mailto:asadrahim32@gmail.com" class="btn btn--outline">Contact Me</a>
</p>

---

## Professional Summary

Full Stack Python & AI Developer with 5+ years of experience building scalable backend systems and advanced AI solutions. Expert in Python, Flask, FastAPI, and cloud platforms (AWS, GCP), with practical experience in database optimization, data pipelines, and API design. Focused on RAG architectures, LLM integrations, Model Context Protocol (MCP), and production deployment with Docker/Kubernetes. Completed the University of Alberta's Software Design and Architecture specialization, covering object-oriented design, design patterns, software architecture, and service-oriented architecture.

---

## Key Achievements

- **40% API Performance Improvement** through systematic optimization
- **Enterprise RAG Implementation** improving LLM accuracy
- **Cloud Migration Leadership** enhancing system reliability
- **Best Employee of the Year** - LinkedMatrix (<time datetime="2023-02">February 2023</time>)

---

## Work Experience

### Full Stack Developer & AI Engineer
<p class="resume-meta"><strong>Freelance</strong> <span aria-hidden="true">|</span> {% include date-range.html start="2020-09" end="present" %}</p>

*Focus: AI Engineering & LLM Systems*

- Built Vector RAG systems using dense retrieval (Pinecone) and hybrid search strategies to optimize context relevance for LLMs
- Designed Graph RAG solutions leveraging knowledge graphs (Neo4j, AWS Neptune) to enhance LLM reasoning
- Developed Model Context Protocol (MCP) server integrations with dynamic routing between LLMs (GPT-4, Claude, LangChain)
- Built custom tooling for prompt chaining, LLM benchmarking, and audit logging
- Deployed containerized services (Docker/K8s) on AWS/GCP with autoscaling and monitoring (Grafana, Prometheus)

---

### Back End Developer
<p class="resume-meta"><strong>Pivony</strong> (US-based, Remote) <span aria-hidden="true">|</span> {% include date-range.html start="2023-12" end="2024-08" %}</p>

- Led migration of entire API service to new design using Python and AWS DynamoDB
- Developed data pipelines using AWS EC2, AWS Glue, and Pandas
- Optimized Flask API endpoints with Postgres, improving performance and response times
- Collaborated with cross-functional teams for seamless backend-frontend integration
- Implemented best practices for code quality, version control, and deployment

---

### Full Stack Developer & Team Lead
<p class="resume-meta"><strong>Linked Matrix International</strong> <span aria-hidden="true">|</span> {% include date-range.html start="2020-05" end="2023-12" %}</p>

- Implemented dynamic interfaces using Vue.js, React, and Next.js
- Demonstrated expertise in database design with MySQL, PostgreSQL, MongoDB, and Snowflake
- Applied cloud computing knowledge in AWS and GCP for scalable solutions
- Utilized AWS services: EC2, S3, Lambda, RDS
- K8s deployments with GitHub Actions, CI/CD, and Helm charts
- **Award: Best Employee of the Year (<time datetime="2023-02">February 2023</time>)**

---

### Associate Software Engineer
<p class="resume-meta"><strong>Orange Lynx IT</strong> <span aria-hidden="true">|</span> {% include date-range.html start="2019-05" end="2020-09" %}</p>

- Full stack development on social media app 'Yakbun'
- VueJs frontend + PHP Laravel backend
- Kubernetes deployments with GitHub Actions CI/CD
- Participated in entire software development lifecycle

---

## Education

**University of Engineering and Technology, Lahore**
Bachelor of Science in Computer Science
<p><em>{% include date-range.html start="2016-09" end="2020-09" duration=false %}</em></p>
**CGPA: 3.48/4.00**

---

## Technical Skills

### AI/ML & LLM
RAG (Vector/Graph), LangChain, LLM Orchestration, Knowledge Graphs (Neo4j), Advanced Prompt Engineering, Generative AI Applications, OpenAI, Claude, GPT-4, Model Context Protocol (MCP)

### Web Development
**Backend:** FastAPI, Flask, Django, FastMCP
**Frontend:** JavaScript, React.js/React 19, Next.js, Vue.js
**Real-time:** WebSockets, SSE

### Software Architecture & CS Fundamentals
Software Architecture, Service-Oriented Architecture, Object-Oriented Design, Design Patterns, Reusable Software Design, Data Structures, Algorithms

### Databases
**SQL:** PostgreSQL, MySQL
**NoSQL:** MongoDB, Redis, DynamoDB, Neo4j

### Cloud Platforms
**AWS:** EC2, S3, Lambda, RDS, DynamoDB, Glue, Neptune
**GCP:** Compute Engine, Cloud Functions, BigQuery

### Data Engineering
Snowflake, Databricks, dbt, Fivetran, Pandas, AWS Glue, RAY

### DevOps
**CI/CD:** GitHub Actions, GitLab CI/CD, Bitbucket Pipelines, Ansible
**Containers:** Docker, Kubernetes, Helm Charts, ArgoCD
**Monitoring:** Grafana, Prometheus, Kafka, Celery

---

## Certifications

<table>
  <thead>
    <tr>
      <th>Certification</th>
      <th>Provider</th>
      <th>Issued</th>
    </tr>
  </thead>
  <tbody>
    {% for certificate in site.data.certifications %}
      <tr>
        <td><a href="{{ certificate.certificate | relative_url }}">{{ certificate.title }}</a></td>
        <td>{{ certificate.provider }}</td>
        <td><time datetime="{{ certificate.issued }}">{{ certificate.issued | date: "%B %-d, %Y" }}</time></td>
      </tr>
    {% endfor %}
  </tbody>
</table>

[View credential IDs and Coursera verification links]({{ '/certifications/' | relative_url }}).

---

## Volunteering

- **United Nations Volunteers** - IT Education for developing countries
- **Tea Community** - Open source contributor and mentor

---

## Contact Information

- **Email:** asadrahim32@gmail.com
- **LinkedIn:** [linkedin.com/in/m-asadrahim](https://www.linkedin.com/in/m-asadrahim/)
- **GitHub:** [github.com/AsadRahim](https://github.com/AsadRahim)
- **Upwork:** [upwork.com/freelancers/asadr14](https://www.upwork.com/freelancers/asadr14)

---

<p style="text-align: center;">
  <a href="/assets/files/resume.pdf" class="btn btn--primary" download>Download PDF Resume</a>
  <a href="mailto:asadrahim32@gmail.com" class="btn btn--outline">Get In Touch</a>
</p>
