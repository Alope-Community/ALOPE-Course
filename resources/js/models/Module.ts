import { Course } from './Course';
import { Writer } from './Writer';

export type Module = {
    id: string;
    slug: string;
    title: string;
    description: string;
    cover: string;
    body: string;

    course_id: string;
    course: Course;

    reads: ReadModule[];

    writer: Writer;

    created_at?: string;
    deleted_at?: null;
    updated_at?: string;
};

export type ReadModule = {
    id: number;
    article_id: string;

    created_at?: string;
};
