export interface QuestionsState {
    all: Questions
}

export interface Questions {
    [questionId: number]: Question
}

export interface Question {
    id: number

    text: string

    picture?: string

    answers: Answers

    correctAnswerId: string
}

export interface Answers {
    [answerId: string]: Answer
}

export interface Answer {
    text: string

    picture?: string
}
