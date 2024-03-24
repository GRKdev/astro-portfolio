---
title: "Real State AI"
publishedAt: 2022-12-24
description: "Real Estate Search Engine for Andorra using OpenAI's finetuned model (Babbagge-02), Next.js, and Vercel. More efficient than using SQL agents or directly generating SQL from a large language model (LLM)."
slug: "real-state-ai"
image: 
  src: "/post_img/real_state_screen.webp"
  alt: "Real State AI"
img_logo: 
  src: "/post_img/real_state.webp"
  alt: "Real State AI logo"
github: ""
website: "https://rs.iand.dev/"
technologies:
  - name: "OpenAI"
    route: "/svg/openai.svg"
  - name: "React"
    route: "/svg/react.svg"
  - name: "Next.js"
    route: "/svg/nextjs.svg"
  - name: "Vercel"
    route: "/svg/vercel.svg"
  - name: "Shadcn"
    route: "/svg/shadcn.svg"
  - name: "Clerk"
    route: "/svg/clerk.svg"

---

## Real Estate Search Engine for Andorra

### Overview

Our Real Estate Search Engine is a cutting-edge platform designed specifically for the Andorran property market. Utilizing a fine tuned model from OpenAI (babbage-02), the search engine offers unprecedented precision and speed. This innovative approach ensures that users receive the most relevant results quickly and efficiently, more than using traditional SQL agents or directly generating SQL from a large language model (LLM).

### Features

- **Multilingual Support**: Catering to a diverse audience with support for Catalan, Spanish, English, and French.
- **Advanced Search Filters**: Users can refine their search with various filters and extra options to find their ideal property.
- **AI-Powered Queries**: Leverages a fine-tuned OpenAI model to interpret search inputs and generate precise API queries.
- **Real-Time Updates**: Dynamically updates search results, providing immediate access to the latest properties.

### Why a Fine-Tuned Model?

Choosing a fine-tuned model over traditional SQL agents or directly generating SQL from a large language model (LLM) presents several advantages:

- **Precision**: Fine-tuned models can better understand and process natural language queries, leading to more accurate search parameters and results.
- **Speed**: Although fine-tuning requires significant initial effort, the resulting model provides faster responses by directly generating API queries.
- **Data Importance**: The quality of the paramaters API heavily depends on the underlying data. Fine-tuning allows the model to leverage specific datasets for improved performance.

Example of a traning data:
```json
{"prompt": "Penthouses for sale in Les Bons less than 400000 €%", "completion": "location=33&transaction_type=1&property_type=15&maxprice=400000%"}
{"prompt": "Lofts for sale in Ordino%", "completion": "location=5&transaction_type=1&property_type=18%"}
```



### Technologies

- **Next.js**: A React framework that enables functionality such as server-side rendering and generating static websites. Used for building the frontend interface, providing a dynamic and responsive user experience.
- **OpenAI's GPT (Babbage-02)**: A language model fine-tuned for this application to understand and process real estate queries efficiently.
- **OpenAI's Whisper**: An Speech-to-Text API  that allows users to input search queries via voice commands.
- **Vercel PostgreSQL**: My choice for a highly scalable and managed database solution, ensuring robust and secure data management.
- **Deployment on Vercel Servers**: For seamless hosting and superior performance, our platform is deployed on Vercel's cutting-edge infrastructure.
- **Clerk**: A user authentication service that provides secure and customizable login functionality for our Real Estate Search Engine.

### Demo

Experience our Real Estate Search Engine firsthand at [rs.iand.dev](https://rs.iand.dev). U will need to authenticate with Google, Github, or your email with Clerk to access the platform.
