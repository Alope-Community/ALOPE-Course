import { Course } from './Course';

export type Article = {
    id: string;
    slug: string;
    title: string;
    description: string;
    cover: string;
    body: string;

    course_id: string;
    course: Course;

    created_at?: string;
    deleted_at?: null;
    updated_at?: string;
};
