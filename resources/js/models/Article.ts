import { Course } from './Course';
import { Writer } from './Writer';

export type Article = {
    id: string;
    slug: string;
    title: string;
    description: string;
    cover: string;
    body: string;

    course_id: string;
    course: Course;

    reads: ReadArticle[];

    writer: Writer;

    created_at?: string;
    deleted_at?: null;
    updated_at?: string;
};

export type ReadArticle = {
    id: number;
    article_id: string;

    created_at?: string;
};
