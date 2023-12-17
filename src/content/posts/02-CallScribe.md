---
title: "CallScribe"
publishedAt: 2022-05-24
description: "Integrated call center management system with audio transcription, FastAPI for data handling, and a Next.js interface for accessing and interacting with conversation data."
slug: "CallScribe"
isPublish: true
image: 
  src: "/post_img/callscribe.webp"
  alt: "CallScribe"
github: "https://github.com/GRKdev/Callscribe"
website: "https://cc.iand.dev/"
technologies:
  - "/svg/react.svg"
  - "/svg/nextjs.svg"
  - "/svg/python.svg"
  - "/svg/fastapi.svg"
  - "/svg/openai.svg"
  - "/svg/mongodb.svg"
  - "/svg/docker.svg"
---


## CallScribe
This comprehensive system integrates audio file processing, backend management, and frontend display to handle call center conversations. It processes audio files for transcription and analysis, manages conversation data via a FastAPI backend, and displays conversation details through a Next.js frontend.

## Overview

### 1. Audio File Processing and Analysis
- **Function**: Transcribes audio files and performs sentiment analysis and conversation summaries.
- **Key Features**:
  - Monitors a directory for new audio files.
  - Uses Gladia API for transcription and OpenAI's GPT-3.5 for analysis.
  - Integrates with MongoDB for data storage.
  - Avoids reprocessing with duplication checks.
- **Tech Stack**: Python, Gladia API, OpenAI GPT-3.5, MongoDB.

### 2. FastAPI Backend Application
- **Function**: Manages conversation data and provides RESTful API endpoints.
- **Key Features**:
  - Lists and updates conversation records.
  - Custom JSON encoder for MongoDB ObjectId.
  - CORS support for frontend integration.
- **Tech Stack**: FastAPI, Uvicorn, MongoDB, Python.

### 3. Next.js Frontend Application
- **Function**: Displays conversation information retrieved from the backend.
- **Tech Stack**: Next.js, React.
- **Features**:
  - Dynamic display of conversation cards.
  - Interactive filters for time, status, and custom date.
  - Search functionality for specific conversations.
  - Responsive design for various screen sizes.
  - Sentiment analysis visualization.
  - Enables status updates of conversations.
