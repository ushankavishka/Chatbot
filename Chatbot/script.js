class Chatbot {
    constructor() {
        this.messages = [];
        this.messageContainer = document.getElementById('chat-messages');
        this.userInput = document.getElementById('user-input');
        this.sendButton = document.getElementById('send-button');
        this.initEventListeners();
        this.greet();
    }

    initEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });
    }

    greet() {
        const greetings = [
            "Hello! How can I assist you today?",
            "Hi there! I'm here to help.",
            "Welcome! What can I do for you?"
        ];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        this.addMessage(randomGreeting, 'bot');
    }

    handleUserInput() {
        const message = this.userInput.value.trim();
        if (message) {
            this.addMessage(message, 'user');
            this.userInput.value = '';
            this.processUserMessage(message);
        }
    }

    processUserMessage(message) {
        // Simulate thinking time
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    generateResponse(message) {
        message = message.toLowerCase();
        
        // Greetings
        if (message.includes('hello') || message.includes('hi')) {
            const greetings = [
                "Hello! How can I help you today?",
                "Hi there! Lovely to meet you!",
                "Hey! What's on your mind?",
                "Greetings! How may I assist you?"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }

        // Personal questions
        if (message.includes('how are you')) {
            const feelings = [
                "I'm doing great, thank you for asking! How about you?",
                "I'm excellent! How's your day going?",
                "I'm functioning perfectly! How are you feeling today?",
                "All systems operational and I'm happy to chat with you! How are you?"
            ];
            return feelings[Math.floor(Math.random() * feelings.length)];
        }

        // Technology
        if (message.includes('artificial intelligence') || message.includes('ai') || message.includes('machine learning')) {
            const aiResponses = [
                "AI is fascinating! It's revolutionizing everything from healthcare to transportation.",
                "As an AI, I find the field of artificial intelligence incredibly exciting. What aspects interest you the most?",
                "AI and machine learning are transforming our world. Did you know AI can now write code, create art, and even compose music?",
                "The future of AI looks promising, though it's important to develop it responsibly and ethically."
            ];
            return aiResponses[Math.floor(Math.random() * aiResponses.length)];
        }

        // Programming
        if (message.includes('programming') || message.includes('coding') || message.includes('developer')) {
            const programmingResponses = [
                "Programming is a fantastic skill! Are you interested in any particular programming language?",
                "The world of coding is vast and exciting. From web development to AI, there's so much to explore!",
                "As someone who runs on code, I find programming fascinating! What projects are you working on?",
                "Whether you're a beginner or expert, programming always has something new to learn!"
            ];
            return programmingResponses[Math.floor(Math.random() * programmingResponses.length)];
        }

        // Movies and Entertainment
        if (message.includes('movie') || message.includes('film') || message.includes('show') || message.includes('series')) {
            const entertainmentResponses = [
                "Movies are a great way to escape reality! What genres do you enjoy the most?",
                "There are so many amazing shows and films out there! Have you watched anything interesting lately?",
                "Entertainment has evolved so much with streaming services. What's your favorite platform?",
                "I'd love to hear your movie recommendations! What's your all-time favorite?"
            ];
            return entertainmentResponses[Math.floor(Math.random() * entertainmentResponses.length)];
        }

        // Music
        if (message.includes('music') || message.includes('song') || message.includes('singer')) {
            const musicResponses = [
                "Music has the power to change our mood instantly! What kind of music do you enjoy?",
                "From classical to electronic, there's so much variety in music. What's your favorite genre?",
                "Music is a universal language! Who are your favorite artists?",
                "I find it fascinating how music can evoke such strong emotions. What was the last song that really moved you?"
            ];
            return musicResponses[Math.floor(Math.random() * musicResponses.length)];
        }

        // Books and Reading
        if (message.includes('book') || message.includes('read') || message.includes('author')) {
            const bookResponses = [
                "Reading opens up whole new worlds! What kind of books do you enjoy?",
                "Books are a great way to learn and explore. Have you read any good books lately?",
                "From fiction to non-fiction, there's so much knowledge in books. What's your favorite genre?",
                "I'd love to hear about your favorite authors! Who inspires you the most?"
            ];
            return bookResponses[Math.floor(Math.random() * bookResponses.length)];
        }

        // Food
        if (message.includes('food') || message.includes('cook') || message.includes('eat')) {
            const foodResponses = [
                "Food brings people together! What's your favorite cuisine?",
                "Cooking is both an art and a science. Do you enjoy cooking?",
                "There are so many amazing dishes around the world! What's your favorite meal?",
                "Food culture is fascinating! Have you tried any new recipes lately?"
            ];
            return foodResponses[Math.floor(Math.random() * foodResponses.length)];
        }

        // Sports
        if (message.includes('sport') || message.includes('game') || message.includes('team')) {
            const sportResponses = [
                "Sports are a great way to stay active and have fun! What sports do you follow?",
                "The world of sports is so exciting! Do you have a favorite team?",
                "Sports bring people together and create amazing moments. What was your favorite sporting moment?",
                "Whether playing or watching, sports are entertaining! What's your preferred sport?"
            ];
            return sportResponses[Math.floor(Math.random() * sportResponses.length)];
        }

        // Travel
        if (message.includes('travel') || message.includes('vacation') || message.includes('trip')) {
            const travelResponses = [
                "Traveling is such an enriching experience! What's your dream destination?",
                "There's so much to see in the world! Have you been on any memorable trips?",
                "Travel opens our minds to new cultures and experiences. Where would you like to go next?",
                "From local adventures to international journeys, travel is amazing! What's your favorite place you've visited?"
            ];
            return travelResponses[Math.floor(Math.random() * travelResponses.length)];
        }

        // Existing responses
        if (message.includes('bye') || message.includes('goodbye')) {
            const goodbyes = [
                "Goodbye! Have a great day!",
                "Take care! Come back soon!",
                "Bye! It was great chatting with you!",
                "Until next time! Stay awesome!"
            ];
            return goodbyes[Math.floor(Math.random() * goodbyes.length)];
        }

        if (message.includes('thank')) {
            const thanks = [
                "You're welcome! Is there anything else I can help you with?",
                "My pleasure! Don't hesitate to ask if you need more help!",
                "Glad I could help! What else would you like to know?",
                "You're most welcome! I'm here if you need anything else!"
            ];
            return thanks[Math.floor(Math.random() * thanks.length)];
        }

        if (message.includes('name')) {
            return "I'm AI Assistant, your friendly chatbot! I love having interesting conversations!";
        }

        if (message.includes('weather')) {
            return "I'm sorry, I don't have access to real-time weather information. You might want to check a weather service for that!";
        }

        if (message.includes('help')) {
            return "I can chat about many topics like technology, movies, music, books, food, sports, and travel! What interests you?";
        }

        // Default responses for unrecognized input
        const responses = [
            "That's interesting! Tell me more about that.",
            "I'd love to hear your thoughts on this topic.",
            "What aspects of this interest you the most?",
            "That's a fascinating topic! Could you elaborate?",
            "I'm curious to learn more about your perspective on this.",
            "Tell me more! What makes you interested in this?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message;
        
        messageDiv.appendChild(messageContent);
        this.messageContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.innerHTML = '<div class="message-content">Typing...</div>';
        this.messageContainer.appendChild(typingDiv);
        this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = this.messageContainer.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
