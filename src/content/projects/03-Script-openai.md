---
title: "FT-UP"
publishedAt: 2020-05-24
description: "This script is crafted to optimize the data preparation tasks required for fine-tuning OpenAI's language models such as GPT-3.5 and Babbage, thereby enhancing the model training setup."
slug: "FT-UP"
isPublish: true
image: 
  src: "/post_img/ftup.webp"
  alt: "FT-UP"
github: "https://github.com/GRKdev/FTUP"
website: ""
technologies:
  - "/svg/python.svg"
  - "/svg/openai.svg"


---

## FT-UP: OpenAI FineTuning Upload Script

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
- [ ] Adding Token and cost for Babbage model
- [ ] Automate for creating train and validation files 80-20%

## Terminal Output Example:

```bash
$ python ftup.py -f train_gpt3_5.jsonl -m gpt -e 1 -s custom-model-name
    ____________            __  ______ 
   / ____/_  __/           / / / / __ \
  / /_    / /    ______   / / / / /_/ /
 / __/   / /    /_____/  / /_/ / ____/ 
/_/     /_/              \____/_/  


Checking API key ...
- API Key

Checking model ...
- Model gpt

Checking if jsonl is valid ...
- JSON File train_gpt3_5.jsonl

Checking if jsonl format is valid for GPT-3.5 training ...
- Num examples: 225
- JSONL train_gpt3_5.jsonl correct format

Uploading jsonl train file ...
- File ID: file-abcd123

Dataset has ~15153 tokens that will be charged for during training
You'll train for 1 epochs on this dataset
By default, you'll be charged for ~15153 tokens
Total cost: $0.1212 💰

Creating a finetuning job ...
- Fintetuning job id: ftjob-abc123

Status: succeeded
Finetuning succeeded! ☑️
Finetune model: ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURe
```
