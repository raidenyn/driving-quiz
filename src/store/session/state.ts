export interface SessionState {
    current: Session | null
}

export interface Session {
    questions: SessionQuestion[]

    currentQuestionIndex: number
}

export interface SessionQuestion {
    questionId: number

    gottenAnswerId: string | null
}
