---
title: "Chatbot API"
publishedAt: 2023-05-24
description: "Sophisticated interface that enables real-time interaction with our business database, providing access to customer records, item inventory, delivery notes, and financial metrics."
slug: "chatbot-api"
isPublish: true
technologies:
  - "/svg/python.svg"
  - "/svg/streamlit.svg"
  - "/svg/openai.svg"
  - "/svg/mongodb.svg"
  - "/svg/docker.svg"
image: 
  src: "/post_img/chatbot.webp"
  alt: "Chatbot API"
github: "https://github.com/GRKdev/StreamLit-Api"
website: "https://langchat.iand.dev/"
---

## ChatBot Streamlit

Creation of the chatbot using Streamlit. The user asks questions, and the chatbot with the fine-tuning model returns a response via a request to the API URL. Additionally, the chatbot has quick access to view statistics directly connected to the database through the API. Successful results will be returned to GPT-3.5 Turbo to generate a response. If there are no successful results, or it is a general question, a GPT-3.5 Finetuned model will be used to generate the response.

## Technologies

- [Python](https://www.python.org/)
- [Streamlit](https://streamlit.io/)
- [Streamlit-Echarts](https://github.com/andfanilo/streamlit-echarts)
- [Helicone](https://helicone.ai/)
- [Lakera](https://lakera.ai/)

## Roadmap

- [x] [Script for data preparation](https://github.com/GRKdev/Script-SQL-API): Script for training preparation.
- [x] [Script for automatic connection and fine-tuning (new OpenAI API)](https://github.com/GRKdev/Script-SQL-API): Script for connection to OpenAI and automatic fine-tuning.
- [x] [Flask API](https://github.com/GRKdev/api-docker-ngrok): API for connection to MongoDB database.
- [x] [StreamLit Chatbot](https://github.com/GRKdev/StreamLit-Api): Chatbot for user interaction.
- [x] Responses with graphs: Bar, line, radar, etc. Streamlit-Echarts.
- [x] Last question/answer context, and API errors
- [x] GPT-3.5 Turbo Finetuned response for answers without database results
- [x] Feedback for chatbot responses (Helicone)
- [x] Lakera Guard for prompt injection messages and hate/sexual messages
- [ ] Data with embeddings (Langchain/Llama-Index) for chatting with documents
- [ ] Creation of Agents and Custom Functions

## Contributors
<a href="https://github.com/GRKdev/StreamLit-Api/graphs/contributors">
<img src="https://contrib.rocks/image?repo=GRKdev/StreamLit-Api" />
</a>