---
title: Chabot Massana
publishedAt: 2024-08-06
description: "DEMO of a chatbot designed to answer questions about the Comú de la Massana, its services, and procedures using Generative Artificial Intelligence and vector search technology."
slug: "chabot-massana"
image: 
  src: "/post_img/massana-screen.webp"
  alt: "Chabot Massana"
img_logo: 
  src: "/post_img/massana-screen.webp"
  alt: "Chabot Massana logo"
github: ""
website: "https://ragent.iand.dev"
technologies:
  - name: "Chainlit"
    route: "/svg/chainlit.svg"
  - name: "OpenAI"
    route: "/svg/openai.svg"
  - name: "Langchain"
    route: "/svg/langchain.svg"
  - name: "Qdrant"
    route: "/svg/qdrant.svg"
  - name: "Cohere"
    route: "/svg/cohere.svg"
---

DEMO of a chatbot designed to answer questions about the Comú de la Massana, its services, and procedures using Generative Artificial Intelligence and vector search technology. The information is sourced from the official website of the Comú de la Massana.

It serves as a demonstration of the power of natural language technologies and semantic search tools to improve user interaction and provide a better experience.

Currently, information has been indexed about the municipality, procedures, services, and all news updates since August 2024.

### Technologies Used

- **Agent system** to route user questions, refine queries, and direct them to different sections (Information, Procedures, Services, News, and Activities).

- **RAG (Retrieval Augmented Generation)** system with a local Qdrant server as the vector database. Hybrid Search is used for searching within news content.

- For activities, **tool-call** is used to search for events, restaurants, hotels, and mountain trails. Cards are returned using React components for visualization and interactivity.

- **Langchain** as the framework to work with OpenAI's API using the gpt-4o-mini language model.

- A collection was created where data is indexed separately by topic, using refined user queries with Hybrid Search.

### Brief Summary of Technologies

- **Langchain**: Open framework to build applications with large language models, integrating multiple model providers.
- **OpenAI’s gpt-4o-mini**: Advanced language model for understanding and generating natural language text.
- **Qdrant**: Vector search engine and vector database with metadata, written in Rust, used in neural network or semantic-based applications.
- **Chainlit**: Open-source tool to build conversational AI applications with Python.
- **Cohere Rerank**: Tool to improve result relevance using ReRanking.
