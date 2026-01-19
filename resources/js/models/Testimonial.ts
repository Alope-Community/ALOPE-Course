export type Testimonial = {
    user: {
        name: string;
    };
    message: string;
    profession: 'Mahasiswa' | 'Pelajar' | 'Umum';
    rating: number;
};
