import textwrap
import google.generativeai as genai
from IPython.display import display
from IPython.display import Markdown
from dotenv import load_dotenv
import os

load_dotenv()

token = os.getenv("GOOGLEAPI")
genai.configure(api_key=token)
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


def solve(query):
    response = chat.send_message(query)
    return response.text