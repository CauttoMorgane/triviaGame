interface Question {
    category: string,
    type: any,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export default Question;
