export type Quiz = {
    id: string;
    slug: string;
    title: string;
    cover?: string;
    course_id: string;
    description: string;

    questions?: Question[];

    created_at?: string;
    updated_at?: string;
};

export type Question = {
    id: string;
    option1?: string;
    option2?: string;
    option3?: string;
    option4?: string;
    correct_answer?: string;
    question: string;
    quiz_id: string;

    created_at?: string;
    updated_at?: string;
};

export type Answer = {
    id: string;
    answer: string;
    is_correct: boolean;
    user_id: number;
    question_id: string;

    created_at?: string;
    updated_at?: string;
};
