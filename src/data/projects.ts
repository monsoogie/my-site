/**
 * All project content lives here. Each entry becomes a card on the homepage
 * and Work page, plus its own case study page at /work/<slug>.
 *
 * To swap images, drop your files into public/projects/<slug>/ and update the
 * paths below (any format works: .jpg, .png, .webp, .svg).
 *
 * All copy below is placeholder.
 */

export type Pastel = 'dusty-blue' | 'butter' | 'sage' | 'apricot';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  /** 'wide' spans the full gallery width; default is half width on desktop. */
  size?: 'wide' | 'half';
}

export interface Project {
  slug: string;
  title: string;
  /** Shown on the tag chip, e.g. "Branding". */
  discipline: string;
  year: number;
  /** One line for the card. */
  summary: string;
  /** Pastel behind the card illustration and case study hero. */
  color: Pastel;
  /** Card / hero image. */
  cover: string;
  coverAlt: string;
  /** Show in the homepage carousel. */
  featured: boolean;

  client: string;
  role: string;
  team: string;
  duration: string;

  context: string[];
  myRole: string[];
  process: { title: string; body: string }[];
  outcome: { summary: string; metrics: { value: string; label: string }[] };
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: 'harbor-and-pine',
    title: 'Harbor & Pine',
    discipline: 'Branding',
    year: 2025,
    summary: 'A new identity for a coastal bakery group opening its fifth shop.',
    color: 'butter',
    cover: '/projects/harbor-and-pine/cover.svg',
    coverAlt: 'Illustration of a pencil drawing a lowercase letter a inside a circle.',
    featured: true,
    client: 'Harbor & Pine Bakeries',
    role: 'Design Director',
    team: '1 brand lead, 2 designers, 1 illustrator',
    duration: '14 weeks',
    context: [
      'Harbor & Pine started as a single seaside bakery and grew to four shops on reputation alone. Each shop had drifted into its own look, and the fifth opening was a chance to pull them back together.',
      'The owners wanted something that felt handmade and local, but could stretch across packaging, signage, a website and a wholesale range.',
    ],
    myRole: [
      'I led the engagement from pitch to rollout, set the creative direction and ran the weekly crits with the client.',
      'I also directed the illustrator on the hand-drawn pattern system and reviewed every production file before it went to print.',
    ],
    process: [
      { title: 'Listen', body: 'Two days behind the counter in each shop, interviews with staff and regulars, and an audit of every printed piece in use.' },
      { title: 'Explore', body: 'Three territories presented as mood films rather than logos, so the team reacted to feeling before form.' },
      { title: 'Build', body: 'A wordmark, a flexible illustration library and a warm, simple type system, tested on real boxes and chalkboards.' },
      { title: 'Roll out', body: 'A launch kit for the fifth shop, then a phased refresh of the other four over six months.' },
    ],
    outcome: {
      summary: 'The fifth shop opened with a queue around the block, and the new packaging became the thing people posted about.',
      metrics: [
        { value: '5', label: 'shops on one system' },
        { value: '+38%', label: 'wholesale enquiries' },
        { value: '120', label: 'illustration assets' },
      ],
    },
    images: [
      { src: '/projects/harbor-and-pine/image-1.svg', alt: 'Placeholder for packaging photography.', caption: 'Packaging range', size: 'wide' },
      { src: '/projects/harbor-and-pine/image-2.svg', alt: 'Placeholder for shopfront signage.', caption: 'Shopfront signage' },
      { src: '/projects/harbor-and-pine/image-3.svg', alt: 'Placeholder for the illustration library.', caption: 'Illustration library' },
    ],
  },
  {
    slug: 'tidewell-app',
    title: 'Tidewell App',
    discipline: 'UX/UI',
    year: 2024,
    summary: 'Redesigned booking flow for a clinic network. Drop-off fell by a third.',
    color: 'dusty-blue',
    cover: '/projects/tidewell-app/cover.svg',
    coverAlt: 'Illustration of a phone screen with a cursor tapping a button.',
    featured: true,
    client: 'Tidewell Health',
    role: 'Design Director',
    team: '1 product designer, 1 researcher, 4 engineers',
    duration: '6 months',
    context: [
      'Tidewell runs 30 physiotherapy clinics. More than half of new patients started a booking in the app and never finished it.',
      'The team suspected the problem was visual. Early research suggested it was the order of the questions.',
    ],
    myRole: [
      'I shaped the problem with the product lead, coached the product designer through the work and kept research at the centre of every decision.',
      'I also set up the design review rhythm with engineering so we could ship in small, measurable slices.',
    ],
    process: [
      { title: 'Research', body: 'Twelve patient interviews and a funnel analysis showed people dropped out when asked for insurance details before seeing any times.' },
      { title: 'Reframe', body: 'We flipped the flow so patients pick a time first and fill in details after, once they have something to lose.' },
      { title: 'Prototype', body: 'Three versions tested with patients in clinic waiting rooms, iterating between sessions.' },
      { title: 'Ship & measure', body: 'Released behind a flag to 10% of users, then rolled out once the numbers held for four weeks.' },
    ],
    outcome: {
      summary: 'Booking completion rose sharply, and support calls about booking dropped enough to free a full role for other work.',
      metrics: [
        { value: '−34%', label: 'booking drop-off' },
        { value: '4.7★', label: 'app store rating' },
        { value: '6 wks', label: 'from insight to launch' },
      ],
    },
    images: [
      { src: '/projects/tidewell-app/image-1.svg', alt: 'Placeholder for booking flow screens.', caption: 'New booking flow', size: 'wide' },
      { src: '/projects/tidewell-app/image-2.svg', alt: 'Placeholder for research synthesis board.', caption: 'Research synthesis' },
      { src: '/projects/tidewell-app/image-3.svg', alt: 'Placeholder for component library.', caption: 'Component library' },
    ],
  },
  {
    slug: 'field-notes-studio',
    title: 'Field Notes Studio',
    discipline: 'Web',
    year: 2024,
    summary: 'An editorial website for a landscape practice, built to grow with them.',
    color: 'sage',
    cover: '/projects/field-notes-studio/cover.svg',
    coverAlt: 'Illustration of a browser window with a small plant beside it.',
    featured: true,
    client: 'Field Notes Studio',
    role: 'Design Director',
    team: '1 web designer, 1 developer, 1 copywriter',
    duration: '10 weeks',
    context: [
      'Field Notes is a landscape architecture practice whose work is slow, careful and beautiful. Their old website was a grid of thumbnails that said none of that.',
      'They wanted a site that could hold long-form project stories and that their own team could update without help.',
    ],
    myRole: [
      'I set the creative direction, wrote the content model with the developer and ran workshops with the practice to find their voice.',
    ],
    process: [
      { title: 'Content first', body: 'We wrote three full project stories before designing a single page, so the layout served the writing.' },
      { title: 'Design system', body: 'A small set of editorial blocks that could be combined freely, with strict rules on type and spacing.' },
      { title: 'Build', body: 'A static site with a simple CMS, tuned for fast loading of large photography.' },
      { title: 'Handover', body: 'Training sessions and a short guide, so the practice publishes new work on their own.' },
    ],
    outcome: {
      summary: 'The practice now publishes a new project story every month and credits the site for two major commissions.',
      metrics: [
        { value: '12', label: 'stories published by the team' },
        { value: '2.1×', label: 'time on site' },
        { value: '98', label: 'Lighthouse performance' },
      ],
    },
    images: [
      { src: '/projects/field-notes-studio/image-1.svg', alt: 'Placeholder for homepage design.', caption: 'Homepage', size: 'wide' },
      { src: '/projects/field-notes-studio/image-2.svg', alt: 'Placeholder for a project story page.', caption: 'Project story' },
      { src: '/projects/field-notes-studio/image-3.svg', alt: 'Placeholder for mobile layouts.', caption: 'Mobile' },
    ],
  },
  {
    slug: 'growing-a-team',
    title: 'Growing a Team of Twelve',
    discipline: 'Leadership',
    year: 2023,
    summary: "How we built the studio's crit rituals, career ladder and hiring loop.",
    color: 'apricot',
    cover: '/projects/growing-a-team/cover.svg',
    coverAlt: 'Illustration of three people with a speech bubble above them.',
    featured: true,
    client: 'In-house studio',
    role: 'Design Director',
    team: '12 designers across 3 disciplines',
    duration: 'Ongoing since 2021',
    context: [
      'The studio grew from four designers to twelve in two years. What worked in one room stopped working across three disciplines and two time zones.',
      'Designers were unsure how to grow, crits had become status updates, and hiring depended on who had time that week.',
    ],
    myRole: [
      'I designed and ran the changes with the team rather than for them, and I still facilitate the monthly studio crit.',
    ],
    process: [
      { title: 'Listen', body: 'One-to-ones with every designer and an anonymous survey about what helped and what got in the way.' },
      { title: 'Crit rituals', body: 'A weekly crit format with clear roles, a timer and a rule that feedback is about the work, never the person.' },
      { title: 'Career ladder', body: 'A shared ladder written with the team, with examples for each level and each discipline.' },
      { title: 'Hiring loop', body: 'A structured interview loop with a paid, time-boxed exercise and consistent scoring.' },
    ],
    outcome: {
      summary: 'Retention held through a hard market, and three designers were promoted from within to lead their own pods.',
      metrics: [
        { value: '92%', label: 'two-year retention' },
        { value: '3', label: 'internal promotions to lead' },
        { value: '4.6/5', label: 'team health score' },
      ],
    },
    images: [
      { src: '/projects/growing-a-team/image-1.svg', alt: 'Placeholder for the career ladder framework.', caption: 'Career ladder', size: 'wide' },
      { src: '/projects/growing-a-team/image-2.svg', alt: 'Placeholder for a crit session.', caption: 'Weekly crit' },
      { src: '/projects/growing-a-team/image-3.svg', alt: 'Placeholder for the hiring loop diagram.', caption: 'Hiring loop' },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** The project after this one, wrapping around, for the "next project" link. */
export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
