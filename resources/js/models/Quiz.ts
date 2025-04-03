export type Quiz = {
    id: string;
    slug: string;
    title: string;
    cover?: string;
    course_id: string;
    description: string;

    created_at?: string;
    updated_at?: string;
};
