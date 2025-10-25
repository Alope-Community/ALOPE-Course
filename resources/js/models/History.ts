import Module from 'module';
import { Question } from './Quiz';

export type HistoryLog = {
    id: string;
    created_at: string;
    user_id: number;
    // article
    article_id: string;
    article?: Module;
    // quiz
    answer?: string;
    is_correct?: number;
    question?: Question;
    question_id?: string;
    udpated_at?: string;
};

export type History = {
    history: {
        id: string;
        title: string;
        slug: string;
        type: 'article' | 'course';
    };
    logs: HistoryLog[];
    created_at: string;
};
