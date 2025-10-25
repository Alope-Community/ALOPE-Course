import { Category } from './Category';
import { Hashtag } from './Hashtag';
import { Module } from './Module';
import { Quiz } from './Quiz';
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
    modules: Module[];
    videos: Video[];
    category: Category;
    quizzes: Quiz[];

    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
};
