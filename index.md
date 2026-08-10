---
layout: single
title: "Muhammad Asad Rahim"
permalink: /
author_profile: true
classes: wide
---

<div class="hero">
  <h1 class="hero__title">Full Stack Developer & AI Engineer</h1>
  <p class="hero__subtitle">Building intelligent systems with 5+ years of Python expertise</p>
  <p>
    <a href="/about/" class="btn btn--primary">Learn More</a>
    <a href="/resume/" class="btn btn--outline">View Resume</a>
  </p>
</div>

---

## What I Do

I help businesses build intelligent systems by combining full-stack development, software architecture, and applied AI. I specialize in production-ready RAG, Model Context Protocol (MCP), and multi-LLM orchestration solutions.

<div class="grid grid--3">
  <div class="feature-box">
    <div class="feature-box__icon">
      <i class="fas fa-brain"></i>
    </div>
    <h3 class="feature-box__title">AI Engineering</h3>
    <p class="feature-box__text">Vector/Graph RAG systems, LLM orchestration with GPT-4 & Claude, Model Context Protocol servers, and custom retrieval pipelines</p>
  </div>

  <div class="feature-box">
    <div class="feature-box__icon">
      <i class="fas fa-code"></i>
    </div>
    <h3 class="feature-box__title">Full Stack Development</h3>
    <p class="feature-box__text">High-performance backends with FastAPI/Django/Flask, modern React/Vue frontends, and reusable service-oriented architectures</p>
  </div>

  <div class="feature-box">
    <div class="feature-box__icon">
      <i class="fas fa-cloud"></i>
    </div>
    <h3 class="feature-box__title">Cloud & DevOps</h3>
    <p class="feature-box__text">Docker/Kubernetes deployments, CI/CD pipelines, AWS/GCP infrastructure optimization</p>
  </div>
</div>

---

## Key Achievements

- **40% API Performance Improvement** - Optimized backend systems resulting in significantly reduced response times
- **Enterprise RAG Systems** - Implemented retrieval-augmented generation that improved LLM accuracy for enterprise applications
- **Cloud Migrations** - Led successful cloud migrations enhancing system reliability and scalability
- **Best Employee Award** - Recognized as Employee of the Year at LinkedMatrix (<time datetime="2023-02">February 2023</time>)

---

## Featured Projects

<div class="grid grid--2">
  <div class="project-card">
    <h3 class="project-card__title">Model Context Protocol Server for LLM Orchestration</h3>
    <p class="project-card__description">Multi-model routing server for dynamic LLM selection based on latency, cost, and task type.</p>
    <div class="project-card__tech">
      <span class="project-card__tech-tag">Python</span>
      <span class="project-card__tech-tag">FastAPI</span>
      <span class="project-card__tech-tag">Docker</span>
      <span class="project-card__tech-tag">Kubernetes</span>
      <span class="project-card__tech-tag">AWS</span>
    </div>
    <a href="/projects/" class="btn btn--outline">View Details</a>
  </div>

  <div class="project-card">
    <h3 class="project-card__title">Advanced RAG Pipeline</h3>
    <p class="project-card__description">Vector and Graph RAG systems with hybrid search for optimized context retrieval.</p>
    <div class="project-card__tech">
      <span class="project-card__tech-tag">Pinecone</span>
      <span class="project-card__tech-tag">Neo4j</span>
      <span class="project-card__tech-tag">LangChain</span>
      <span class="project-card__tech-tag">OpenAI</span>
    </div>
    <a href="/projects/" class="btn btn--outline">View Details</a>
  </div>
</div>

<p style="text-align: center; margin-top: 1rem;">
  <a href="/projects/" class="btn btn--primary">View All Projects</a>
</p>

---

## Selected Certifications

<div class="grid grid--2">
  {% for certificate in site.data.certifications %}
    {% if certificate.featured %}
      <article class="credential-highlight">
        <h3 class="credential-highlight__title">{{ certificate.title }}</h3>
        <p class="credential-highlight__provider">{{ certificate.provider }} · {{ certificate.credential_type | default: "Course Certificate" }}</p>
        <p class="credential-highlight__date"><time datetime="{{ certificate.issued }}">{{ certificate.issued | date: "%B %-d, %Y" }}</time></p>
        <a href="{{ '/certifications/#credential-' | append: certificate.credential_id | downcase | relative_url }}">View credential details</a>
      </article>
    {% endif %}
  {% endfor %}
</div>

<p style="text-align: center; margin-top: 1rem;">
  <a href="{{ '/certifications/' | relative_url }}" class="btn btn--primary">View All Certifications</a>
</p>

---

## Client Testimonial

<div class="testimonial">
  <p class="testimonial__text">"I hired Asad as a full stack developer and his work was highly satisfactory. The tool we developed involved complex integrations but he was able to manage them in time. I cannot recommend him enough."</p>
  <p class="testimonial__author">Mohsin Z.</p>
  <p class="testimonial__role">Project Manager - SEO Analysis Tool (Verified on Upwork)</p>
</div>

---

## Let's Connect

I'm open to consulting opportunities, collaborative projects, and discussions about real-world AI deployment.

<p style="text-align: center;">
  <a href="mailto:asadrahim32@gmail.com" class="btn btn--primary">Get In Touch</a>
  <a href="https://www.linkedin.com/in/m-asadrahim/" class="btn btn--outline" target="_blank">LinkedIn</a>
  <a href="https://github.com/AsadRahim" class="btn btn--outline" target="_blank">GitHub</a>
</p>
