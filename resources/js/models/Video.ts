import { Course } from './Course';

export type Video = {
    id: string;
    slug: string;
    title: string;
    description: string;
    link: string;

    course_id: string;
    course: Course;

    created_at?: string;
    deleted_at?: null;
    updated_at?: string;
};
