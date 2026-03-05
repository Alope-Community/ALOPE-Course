import { Event } from '@/models/Event'
import NavbarComponent from '@/Components/Navbar/Navbar'
import FooterComponent from '@/Components/Footer'
import { Container } from '@/Components/Container'
import { HeaderText } from '@/Components/HeaderText'
import { SubText } from '@/Components/SubText'
import Chip from '@/Components/Chip'
import { Head, Link } from '@inertiajs/react'
import { IconCalendar, IconLocation, IconClock, IconPencilBox } from 'justd-icons'
import { formatDateShort } from '@/tools/formatDate'
import ShareButton from '@/Components/ShareButton'

const EventShowPage = ({ event, relatedEvents = [] }: { event: Event, relatedEvents?: Event[] }) => {

    return (
        <>
            <Head title={event.name} />

            <NavbarComponent />

            <Container>
                {/* Hero Section */}
                <div className="relative h-96 w-full overflow-hidden md:h-[500px] lg:h-[600px]">
                    <img
                        src={event.cover || 'https://placehold.co/1200x600?text=No+Image'}
                        alt={event.name}
                        className="h-full w-full rounded-lg object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-lg"></div>

                    {/* Content Hero */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-10 md:px-10 md:pb-16">
                        <div className="flex flex-col gap-4">
                            <Chip label={event.category.name} />
                            <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                                {event.name}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Event Details */}
                <div className="grid gap-8 md:grid-cols-3 mt-10">
                    {/* Date */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 p-3">
                            <IconCalendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-500">Tanggal Event</p>
                            <p className="text-lg font-semibold text-gray-900">{formatDateShort(event.date)}</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 p-3">
                            <IconLocation className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-500">Lokasi</p>
                            <p className="text-lg font-semibold text-gray-900">{event.location}</p>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 p-3">
                            <IconClock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-500">Status</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {new Date(event.date) > new Date() ? 'Akan Datang' : 'Selesai'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gray-200"></div>

                {/* Description */}
                <div className="my-10 prose max-w-none text-justify text-gray-800" dangerouslySetInnerHTML={{ __html: event.description }} />

                {/* Action Button */}
                <div className="mb-12 flex flex-wrap gap-4">
                    {
                        event.register_link &&
                        <a href={event.register_link} target='_blank' className="flex gap-2 items-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 md:px-10">
                            <IconPencilBox />
                            Daftar Event
                        </a>
                    }
                    <ShareButton />
                </div>

                {/* Related Events */}
                {relatedEvents && relatedEvents.length > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
                        <Container>
                            <div className="mb-12 flex flex-col gap-2">
                                <SubText text="Event Yang Lainnya" />
                                <HeaderText text="Event Terkait" />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {relatedEvents.map((relatedEvent) => (
                                    <Link
                                        key={relatedEvent.id}
                                        href={`/events/${relatedEvent.id}`}
                                        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl"
                                    >
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <img
                                                src={relatedEvent.cover || 'https://placehold.co/600x400?text=No+Image'}
                                                alt={relatedEvent.name}
                                                className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <Chip label={relatedEvent.category.name} />
                                            <h3 className="mt-3 line-clamp-2 text-xl font-semibold text-gray-900">
                                                {relatedEvent.name}
                                            </h3>
                                            <div className="mt-4 flex flex-col gap-2">
                                                <p className="flex items-center gap-2 text-sm text-gray-600">
                                                    <IconCalendar className="h-4 w-4 text-blue-600" />
                                                    {formatDateShort(relatedEvent.date)}
                                                </p>
                                                <p className="flex items-center gap-2 text-sm text-gray-600">
                                                    <IconLocation className="h-4 w-4 text-green-600" />
                                                    {relatedEvent.location}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Container>
                    </div>
                )}
            </Container >

            <FooterComponent />
        </>
    )
}

export default EventShowPage