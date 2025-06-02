const fetch = require('node-fetch');

async function chatWithAI(prompt) {
  const response = await fetch('https://api-inference.huggingface.co/models/distilgpt2', {
    method: 'POST',
    headers: {
      'Authorization': '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', // Replace with your Hugging Face API key
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputs: `Yo bro, ${prompt}` })
  });
  const data = await response.json();
  return data[0].generated_text;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('AI: Yo, I’m your AI, bro! What’s up?');
readline.on('line', async (input) => {
  if (input.toLowerCase() === 'exit') return readline.close();
  const reply = await chatWithAI(input);
  console.log(`AI: ${reply}`);
  console.log('You: ');
});
