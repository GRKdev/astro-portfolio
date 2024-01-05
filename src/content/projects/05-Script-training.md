---
title: "Script Training"
publishedAt: 2018-05-24
description: "This program is a desktop tool that allows users to generate jsonL files to train a model with ADA (deprecated) and Babbage-002 by OpenAI. Currently, four types are supported: Clients, Articles, Delivery Notes and Finance Questions. There is a last tab to upload the training to OpenAI."
slug: "script-training"
image: 
  src: "/post_img/script-training_screen.webp"
  alt: "script-training"
img_logo: 
  src: ""
  alt: ""
github: "https://github.com/GRKdev/Script-SQL-API"
website: ""
technologies:
  - name: "Python"
    route: "/svg/python.svg"
  - name: "OpenAI"
    route: "/svg/openai.svg"
---

## JsonL Generator for API Queries to MongoDB Database

This program is a desktop tool that allows users to generate jsonL files to train a model with ADA (deprecated) and Babbage-002 by OpenAI. Currently, four types are supported: `Clients`, `Articles`, `Delivery Notes` and `Finance Questions`.
There is a last tab to upload the training to OpenAI.

## Features

- Simple and easy-to-use graphical interface.
- Generates a file in jsonl format to be able to train a model to perform API queries with a chatbot.
- Support for training `Clients`, `Articles`, `Delivery Notes` and `Finance Questions`.

## Installation

1. Clone or download the repository.
2. Make sure you have Python and Tkinter installed.
3. Run `python main.py` to start the program.

## Training

1. Add your private key from OpenAI.
2. Click on the upload files button.
3. Choose a characteristic name for the model.
4. Send the two files to perform the final training.

## API Connection

This training is specifically designed to create API URLs that connect to this project: [API Docker Ngrok](https://github.com/GRKdev/api-docker-ngrok).

This is the main project: [Chatbot StreamLit](https://github.com/GRKdev/StreamLit-Api)

<div style="display: flex; justify-content: center; ">
  <img src="https://img.shields.io/github/stars/GRKdev/Script-SQL-API.svg" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/GRKdev/Script-SQL-API.svg" alt="GitHub Last Commit" />
</div>
