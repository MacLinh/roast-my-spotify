import transformers
import torch
from transformers import AutoTokenizer

model = "meta-llama/Llama-3.2-1B"

tokenizer = AutoTokenizer.from_pretrained(model)