/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 6: Appreciation of Balance
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who loves doing everything — from scoring high marks in class to practicing basketball and climbing the leaderboards in his favorite video game?',
    choices: {
      a: 'Rodge',
      b: 'Cloudy',
      c: 'John Benedict Villamor',
      d: 'Charlie'
    },
    correct: 'a'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who appears at the end with a gentle smile to share the day\'s moral?',
    choices: {
      a: 'Rodge',
      b: 'Cloudy',
      c: 'John Benedict Villamor',
      d: 'Charlie'
    },
    correct: 'b'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'A classmate is staying up until 2:00 AM every night to finish projects and play online matches, feeling exhausted the next day. Based on the story, what is the best advice to give them?',
    choices: {
      a: 'Play even more games to wake up.',
      b: 'Keep skipping sleep until everything is done.',
      c: 'Create a balanced routine and make sure to get enough rest.',
      d: 'Stop going to school completely.'
    },
    correct: 'c'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You have tests coming up, sports practice, and your favorite hobbies all at once. Using the moral of the story, what should you do?',
    choices: {
      a: 'Try to do everything at the same time without resting.',
      b: 'Organize your schedule to balance work, play, and sleep.',
      c: 'Give up on all your responsibilities.',
      d: 'Stay awake all night so you don\'t miss out on anything.'
    },
    correct: 'b'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What happened to Rodge during basketball practice after staying up late?',
    choices: {
      a: 'He scored the winning shot easily.',
      b: 'His legs felt heavy like bricks and he kept missing his shots.',
      c: 'He decided to quit the basketball team forever.',
      d: 'He had more energy than the rest of his teammates.'
    },
    correct: 'b'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Rodge stay up until 2:00 AM instead of going to bed?',
    choices: {
      a: 'He was trying to finish his science project while playing "just one more match".',
      b: 'He was waiting for a phone call from his friends.',
      c: 'His alarm clock stopped working.',
      d: 'He was organizing his room for the next day.'
    },
    correct: 'a'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'How did Rodge feel when he tried to do everything all at once at his computer desk?',
    choices: {
      a: 'Confident and ahead of everyone',
      b: 'Exhausted, frustrated, and unable to write a single word',
      c: 'Happy that he had so many things to finish',
      d: 'Excited to start another video game raid'
    },
    correct: 'b'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why does the author show Rodge stepping outside to unplug and take a breath?',
    choices: {
      a: 'To show that stepping away from screens and taking a break helps you reset.',
      b: 'To show that Rodge wanted to play basketball alone.',
      c: 'To demonstrate that mornings are boring.',
      d: 'To prove that phones should never be used outdoors.'
    },
    correct: 'a'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What does the schedule board in Rodge\'s room most likely symbolize in the story?',
    choices: {
      a: 'His wish to stop playing video games.',
      b: 'A tool to help him beat his teammates.',
      c: 'Taking control of his time and choosing a balanced, healthy routine.',
      d: 'A strict punishment given to him by his teacher.'
    },
    correct: 'c'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Compare Rodge\'s mindset at the start ("The grind never stops!") with Cloudy\'s lesson at the end. What main contrast does the author want readers to notice?',
    choices: {
      a: 'Working without rest makes you stronger, while relaxing makes you weak.',
      b: 'Trying to do everything without rest leads to burnout, while real strength comes from balance.',
      c: 'Video games are bad, but basketball is always good.',
      d: 'Morning routines are more fun than playing games with friends.'
    },
    correct: 'b'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;