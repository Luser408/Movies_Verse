const randomMessages = [
  "Hey, how's it going?",
  "Did you see that new movie last night?",
  "Can you send me the files we discussed?",
  "I'm going to be a bit late for our meeting",
  "What do you think about the new design?",
  "Just checking in to see how you're doing",
  "Do you have time for a quick call?",
  "I've sent you an email with the details",
  "Let's catch up soon!",
  "Have you finished the project?",
  "Don't forget about our meeting tomorrow",
  "I'm really excited about this new feature",
  "What's on your agenda for today?",
  "Can we reschedule for next week?",
  "Thanks for your help with this!"
];

const personalizedMessages: Record<string, string[]> = {
  "Sarah Johnson": [
    "How's the coding project coming along?",
    "Did you try that new coffee place I told you about?",
    "Let's catch up this weekend if you're free",
    "I found this amazing tutorial you might like"
  ],
  "Alex Chen": [
    "Are we still on for the hackathon?",
    "I need your input on this design",
    "Have you seen the latest React update?",
    "Let me know when you've reviewed the docs"
  ],
  "Michael Rodriguez": [
    "The client loved your design concept!",
    "Can you send me the latest mockups?",
    "Team meeting is moved to 3pm tomorrow",
    "Thought you might find this article interesting"
  ]
};

export const generateMessage = (contactName: string): string => {
  // Check if we have personalized messages for this contact
  if (personalizedMessages[contactName] && Math.random() > 0.5) {
    const messages = personalizedMessages[contactName];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  
  // Otherwise use a random generic message
  return randomMessages[Math.floor(Math.random() * randomMessages.length)];
};
