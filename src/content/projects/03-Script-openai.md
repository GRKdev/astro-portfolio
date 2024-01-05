---
title: "FT-UP"
publishedAt: 2020-05-24
description: "This script is crafted to optimize the data preparation tasks required for fine-tuning OpenAI's language models such as GPT-3.5 and Babbage, thereby enhancing the model training setup."
slug: "FT-UP"
image: 
  src: "/post_img/ftup-screen.webp"
  alt: "FT-UP"
img_logo: 
  src: "/post_img/ftup.webp"
  alt: "FT-UP logo"
github: "https://github.com/GRKdev/FTUP"
website: ""
technologies:
  - name: "Python"
    route: "/svg/python.svg"
  - name: "OpenAI"
    route: "/svg/openai.svg"
---

## FT-UP: CLI OpenAI FineTuning Upload Script

This script helps to automate the process of preparing data for finetuning on OpenAI models, specifically GPT-3.5 and Babbage. It also provides utilities to validate the data, transform the data to the required JSONL format, and estimate the cost of the finetuning process.

## Features:
- Validate API Key
- Validate and select the appropriate model (GPT-3.5 or Babbage)
- Check input data file (JSONL)
- Estimate finetuning cost
- Create and manage finetuning jobs on OpenAI

## Requirements:
- Python 3
- External libraries: `pyfiglet`, `openai`, `tiktoken`, `dotenv`, `argparse`, `json`, `re`, `os`, `sys`, `time`, `clint`

To install the required libraries:
```bash
pip install pyfiglet openai tiktoken python-dotenv argparse clint
```
or
```bash
pip install requirements.txt
```

## Usage:

```bash
python ftup.py [-k <API_KEY>] -m <MODEL_NAME> -f <INPUT_FILE> [-s <SUFFIX>] [-e <EPOCHS>]
```

Arguments:
- `-k, --key`: **Optional.** API key. Optional argument, but required in default env to have an API key in enviroment. OPENAI_API_KEY
- `-m, --model`: **Required.** Model to use. Options: `gpt` for `gpt-3.5-turbo-0613` or `bab` for `babbage-002`.
- `-f, --file`: **Required.** Input data file (JSONL format).
- `-s, --suffix`: Optional. Add a suffix for your finetuned model. E.g., 'my-suffix-title-v-1'.
- `-e, --epoch`: Optional. Number of epochs for training. Default is 3.

## Environment Variables (optional):
Store your API key in a `.env` file in the format:
```bash
OPENAI_API_KEY=your_api_key_here
```
The script will load by default this key if not `-k / --key` passed as an argument.

## Functions:
- `check_key(key)`: Validates format for OpenAI API key.
- `check_model(model)`: Validates the model name.
- `check_jsonl_file(file)`: Checks if the provided file has a valid JSONL name and if it exists.
- `create_update_jsonl_file(model, file)`: Check if JSONL have a correct format and uploads file to OpenAI.
- `update_ft_job(file_id_name, model, suffix, epoch)`: Creates or updates the finetuning job on OpenAI.
- `check_jsonl_gpt35(file)`: Validates the format for GPT-3.5 training.
- `check_jsonl_babbage(file)`: Validates the format for Babbage-002 training.
- `cost_gpt(file, epochs)`: Estimates the cost of the finetuning process.

## Notes:
- Ensure your data adheres to OpenAI's data format guidelines for finetuning.
- Monitor your OpenAI dashboard to keep track of your usage and costs.

## References:
1. [OpenAI Documentation](https://platform.openai.com/docs/introduction)
3. [OpenAI Cookbook - FineTuning](https://cookbook.openai.com/examples/chat_finetuning_data_prep)
2. [Python Argparse Library](https://docs.python.org/3/library/argparse.html)
4. [pyfiglet Documentation](https://github.com/pwaller/pyfiglet)
5. [tiktoken Library](https://github.com/openai/tiktoken)

## Next Features:

- [x] Cancel training pressing key
- [x] Update to new OpenAI API
- [ ] Adding Token and cost for Babbage model
- [ ] Automate for creating train and validation files 80-20%

<div style="display: flex; justify-content: center; ">
  <img src="https://img.shields.io/github/stars/GRKdev/FTUP.svg" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/GRKdev/FTUP.svg" alt="GitHub Last Commit" />
</div>
