import { Event } from '@/models/Event';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import FooterComponent from '@/Components/Footer';
import { Container } from '@/Components/Container';
import { SubText } from '@/Components/SubText';
import { TitleText } from '@/Components/TitleText';
import EventCard from '@/Components/Cards/EventCard';
import { PaginatedResponse } from '@/types/PaginateResponse';
import Pagination from '@/Components/Pagination';

const EventIndexPage = ({
    events,
}: {
    events: PaginatedResponse<Event>
}) => {

    return (
        <>

            <Head title="Events" />

            <NavbarComponent />

            <Container>
                <div className="flex flex-col gap-5">
                    <SubText text="From Our Activity" />

                    <TitleText text="Jejak Aktivitas Kami" />
                </div>

                <section className="my-10 min-h-[calc(100vh-600px)]">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {events.data.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                            />
                        ))}
                    </div>
                </section>

                <Pagination
                    currentPage={events.current_page}
                    lastPage={events.last_page}
                    nextPageUrl={events.next_page_url}
                    prevPageUrl={events.prev_page_url}
                    path={events.path}
                />

            </Container>

            <FooterComponent />

        </>
    )
}

export default EventIndexPage