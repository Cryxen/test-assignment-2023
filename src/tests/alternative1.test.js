
const question1 = {"questions": [
    {
      "title": "Spørsmål kommer her",
      "answers": [
        { "answere": "Svaralternativ 1" },
        {
          "answere": "Svaralternativ 2"
        },
        {
          "answere": "Svaralternativ 3"
        },
        {
          "answere": "Svaralternativ 4",
          "correct": true
        }
      ],
      "helper": {
        "text": "Hjelpetekst kommer her"
      }
    }
  ]}

  const question2 = {"questions": [
    {
      "title": "Spørsmål kommer her",
      "answers": [
        { "answere": "Svaralternativ 1" },
        {
          "answere": "Svaralternativ 2",
          "correct": true
        },
        {
          "answere": "Svaralternativ 3"
        },
        {
          "answere": "Svaralternativ 4"
        }
      ],
      "helper": {
        "text": "Hjelpetekst kommer her"
      }
    }
  ]}


  const question3 = {"questions": [
    {
      "title": "Spørsmål kommer her",
      "answers": [
        { "answere": "Svaralternativ 1" },
        {
          "answere": "Svaralternativ 2"
        },
        {
          "answere": "Svaralternativ 3",
          "correct": true
        },
        {
          "answere": "Svaralternativ 4"
        }
      ],
      "helper": {
        "text": "Hjelpetekst kommer her"
      }
    }
  ]}

  const question4 = {"questions": [
    {
      "title": "Spørsmål kommer her",
      "answers": [
        { "answere": "Svaralternativ 1",
        "correct": true },
        {
          "answere": "Svaralternativ 2"
        },
        {
          "answere": "Svaralternativ 3"
        },
        {
          "answere": "Svaralternativ 4"
        }
      ],
      "helper": {
        "text": "Hjelpetekst kommer her"
      }
    }
  ]}
describe('Checking for alternative 1 answers', () => {
    it('Check for correct answer question 1', () => {
        expect(question1.questions[0].answers[3].correct).toBe(true);
    })
    it('Check for correct answer question 2', () => {
        expect(question2.questions[0].answers[1].correct).toBe(true);
    })
    it('Check for correct answer question 3', () => {
        expect(question3.questions[0].answers[2].correct).toBe(true);
    })
    it('Check for correct answer question 4', () => {
        expect(question4.questions[0].answers[0].correct).toBe(true);
    })
})
