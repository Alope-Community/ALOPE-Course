import { Article } from './Article';
import { Category } from './Category';
import { Hashtag } from './Hashtag';
import { Video } from './Video';

export type Course = {
    id: string;
    slug: string;
    title: string;
    cover?: string;
    visibility: 'public' | 'private';
    category_id: string;
    description: string;

    hashtags: Hashtag[];
    articles: Article[];
    videos: Video[];
    category: Category;

    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
};
