import { Head, Link } from '@inertiajs/react';

const projects = [
    {
        number: '01',
        category: 'Digital experience · 2025',
        title: 'Sunday Studio',
        description: 'A calmer way to discover the things you love.',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'A thoughtfully styled fashion collection',
        color: 'bg-[#e9e4dc]',
    },
    {
        number: '02',
        category: 'Brand & web design · 2024',
        title: 'Form & Field',
        description: 'Giving everyday objects a more considered home.',
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Warm, minimal interior design details',
        color: 'bg-[#dfe5df]',
    },
    {
        number: '03',
        category: 'Product design · 2024',
        title: 'Good Ground',
        description: 'Helping small growers bring fresh food closer.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Fresh produce at a neighborhood market',
        color: 'bg-[#e8e4d9]',
    },
];

function ArrowIcon({ diagonal = false, className = '' }) {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 20 20"
            fill="none"
        >
            {diagonal ? (
                <path
                    d="M5 15 15 5M6 5h9v9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
            ) : (
                <path
                    d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
            )}
        </svg>
    );
}

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Vianha Kate Barace — Creative Portfolio" />
            <div className="min-h-screen bg-[#f8f7f4] text-[#20211f] selection:bg-[#e8a087] selection:text-[#20211f]">
                <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
                    <a
                        href="#home"
                        className="text-sm font-semibold tracking-[-0.04em] sm:text-base"
                        aria-label="Vianha Kate Barace, home"
                    >
                        VKB<span className="text-[#df8065]">.</span>
                    </a>

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-9 text-sm text-[#666761] md:flex"
                    >
                        <a className="transition hover:text-[#20211f]" href="#work">
                            Work
                        </a>
                        <a className="transition hover:text-[#20211f]" href="#about">
                            About
                        </a>
                        <a className="transition hover:text-[#20211f]" href="#contact">
                            Contact
                        </a>
                    </nav>

                    <nav aria-label="Account" className="flex items-center gap-2 sm:gap-3">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-full border border-[#d9d8d2] px-4 py-2 text-xs font-medium transition hover:border-[#20211f] sm:px-5 sm:text-sm"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-full px-3 py-2 text-xs font-medium text-[#555650] transition hover:text-[#20211f] sm:px-4 sm:text-sm"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-full bg-[#20211f] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#df8065] sm:px-5 sm:text-sm"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main id="home">
                    <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-12 sm:px-10 sm:pb-28 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16 lg:pb-36 lg:pt-20">
                        <div className="order-2 lg:order-1">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#df8065]" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#74756f]">
                                    Independent creative · Manila, PH
                                </p>
                            </div>
                            <h1 className="max-w-3xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.075em]">
                                Vianha Kate
                                <span className="block text-[#df8065]">Barace<span className="text-[#20211f]">.</span></span>
                            </h1>
                            <div className="mt-8 max-w-xl sm:mt-10">
                                <p className="text-lg leading-relaxed text-[#575852] sm:text-xl">
                                    I shape thoughtful digital experiences where
                                    clear ideas meet a little bit of magic.
                                </p>
                                <p className="mt-3 text-sm leading-7 text-[#777872] sm:text-base">
                                    Designer, maker, and curious mind. I partner
                                    with good people to turn meaningful ideas into
                                    useful, memorable things.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                                <a
                                    href="#work"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#20211f] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#df8065]"
                                >
                                    Explore my work
                                    <ArrowIcon className="h-4 w-4" />
                                </a>
                                <a
                                    href="#contact"
                                    className="px-3 py-3 text-sm font-medium text-[#555650] transition hover:text-[#df8065]"
                                >
                                    Let&apos;s talk
                                </a>
                            </div>
                            <div className="mt-12 flex items-center gap-5 border-t border-[#e5e3dd] pt-6 sm:mt-16">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#85867f]">
                                    Currently open to
                                </p>
                                <span className="h-1 w-1 rounded-full bg-[#df8065]" />
                                <p className="text-sm font-medium">Select projects for 2025</p>
                            </div>
                        </div>

                        <div className="relative order-1 mx-auto w-full max-w-[460px] lg:order-2 lg:max-w-none">
                            <div className="absolute -right-3 top-8 h-24 w-24 rounded-full border border-[#df8065]/50 sm:-right-6 sm:h-32 sm:w-32" />
                            <div className="absolute -bottom-5 -left-4 z-10 flex h-24 w-24 rotate-[-9deg] items-center justify-center rounded-full bg-[#e8a087] text-center text-[10px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#20211f] shadow-lg sm:-left-8 sm:h-28 sm:w-28">
                                Making
                                <br />
                                things with
                                <br />
                                meaning
                            </div>
                            <div className="relative overflow-hidden rounded-[48%_48%_8px_8px] bg-[#e9e4dc]">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=90"
                                    alt="Portrait of Vianha Kate Barace"
                                    className="aspect-[0.88] w-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute -bottom-8 right-0 hidden text-right sm:block">
                                <p className="text-xs uppercase tracking-[0.17em] text-[#777872]">
                                    Design with intention
                                </p>
                                <p className="mt-1 font-serif text-2xl italic text-[#df8065]">
                                    always & ever
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="work" className="bg-[#efeee9]">
                        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
                            <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
                                <div>
                                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#df8065]">
                                        A few things I&apos;ve made
                                    </p>
                                    <h2 className="text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
                                        Selected work<span className="text-[#df8065]">.</span>
                                    </h2>
                                </div>
                                <p className="max-w-xs text-sm leading-6 text-[#777872]">
                                    A collection of ideas brought to life with
                                    curiosity, care, and collaboration.
                                </p>
                            </div>

                            <div className="grid gap-10 md:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
                                {projects.map((project, index) => (
                                    <article
                                        key={project.number}
                                        className={index === 1 ? 'md:mt-20' : ''}
                                    >
                                        <div className={`group relative overflow-hidden rounded-sm ${project.color}`}>
                                            <img
                                                src={project.image}
                                                alt={project.imageAlt}
                                                loading="lazy"
                                                className="aspect-[1.28] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                            />
                                            <span className="absolute left-5 top-5 rounded-full bg-[#f8f7f4]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]">
                                                {project.category}
                                            </span>
                                            <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f7f4] transition group-hover:bg-[#df8065]">
                                                <ArrowIcon diagonal className="h-5 w-5" />
                                            </span>
                                        </div>
                                        <div className="mt-5 flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-2xl font-medium tracking-[-0.04em]">
                                                    {project.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-[#777872]">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <span className="pt-1 text-xs text-[#92938c]">
                                                {project.number}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="about" className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-32">
                        <div>
                            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#df8065]">
                                A little about me
                            </p>
                            <h2 className="max-w-sm text-4xl font-medium leading-tight tracking-[-0.06em] sm:text-5xl">
                                Good work starts with good questions.
                            </h2>
                        </div>
                        <div className="max-w-2xl">
                            <p className="text-xl leading-relaxed text-[#575852] sm:text-2xl">
                                I believe the best design feels effortless —
                                because someone cared enough to think through
                                every detail.
                            </p>
                            <p className="mt-5 text-sm leading-7 text-[#777872] sm:text-base">
                                My process brings strategy, visual storytelling,
                                and a love for the little details into one
                                thoughtful practice. From the first sketch to
                                the final handoff, I make space for collaboration
                                and keep people at the heart of the work.
                            </p>
                            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#e5e3dd] pt-6 sm:grid-cols-4">
                                {['Art direction', 'Brand identity', 'Web design', 'Prototyping'].map((skill) => (
                                    <p
                                        key={skill}
                                        className="text-xs font-medium text-[#555650] sm:text-sm"
                                    >
                                        {skill}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="bg-[#20211f] text-[#f8f7f4]">
                        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-32">
                            <div>
                                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e8a087]">
                                    Have a good one in mind?
                                </p>
                                <h2 className="max-w-2xl text-5xl font-medium leading-[1.02] tracking-[-0.07em] sm:text-7xl">
                                    Let&apos;s make it
                                    <br />
                                    <span className="font-serif italic text-[#e8a087]">matter.</span>
                                </h2>
                            </div>
                            <a
                                href="mailto:hello@vianhakatebarace.com"
                                className="group inline-flex w-fit items-center gap-5 border-b border-white/30 pb-3 text-base transition hover:border-[#e8a087] sm:text-lg"
                            >
                                hello@vianhakatebarace.com
                                <ArrowIcon
                                    className="h-5 w-5 text-[#e8a087] transition group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </section>
                </main>

                <footer className="flex flex-col gap-3 bg-[#20211f] px-6 pb-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
                    <p>© {new Date().getFullYear()} Vianha Kate Barace. Made with care.</p>
                    <a className="transition hover:text-white" href="#home">
                        Back to top ↑
                    </a>
                </footer>
            </div>
        </>
    );
}
