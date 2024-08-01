async function checkFigurativeLanguage() {
    const text = document.getElementById('inputText').value;
    const apiKey = window.API_KEY;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a figurative language detector.' },
                    { role: 'user', content: `Analyze the text below for any instances of figurative language. If any are found, rewrite the lines that have figurative language in them, provide a description of the figurative elements present, and suggest possible ways to rewrite or explain the figurative language for better clarity and understanding. If you don't find any, say it has no figurative language and write the input in double quotes. Here is the text: "${text}"` },
                ],
                max_tokens: 2000,
                temperature: 0,
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('result').innerHTML = `
            <div>
                <p><strong>Analysis:</strong></p>
                <p>${result.choices[0].message.content}</p>
            </div>
        `;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('result').innerHTML = `
            <div>
                <p><strong>Error:</strong> There was a problem analyzing the text. Please try again later.</p>
            </div>
        `;
    }
}
