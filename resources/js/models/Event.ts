export type Event = {
    id: string;
    category: EventCategory;
    name: string;
    description: string;
    date: string;
    location: string;
    register_link: string;
    cover: string;
}

type EventCategory = {
    id: string;
    name: string;
}