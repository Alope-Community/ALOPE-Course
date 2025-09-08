import { Article } from './Article';
import { Category } from './Category';
import { Hashtag } from './Hashtag';
import { Quiz } from './Quiz';
import { Video } from './Video';

export type Course = {
    id: string;
    slug: string;
    title: string;
    cover?: string;
    visibility: 'public' | 'private';
    status: 'coming-soon' | 'on-going' | 'compleated';
    category_id: string;
    description: string;

    hashtags: Hashtag[];
    articles: Article[];
    videos: Video[];
    category: Category;
    quizzes: Quiz[];

    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
};
