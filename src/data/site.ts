/**
 * Site-wide copy and contact details. All placeholder, edit freely.
 * Project content lives in projects.ts.
 */

export const site = {
  name: 'Monika',
  title: 'Monika, Design Director',
  description: 'Monika is a design director leading brands, products and the teams who make them.',
  email: 'hello@monika.design',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  location: 'Based in your city, working worldwide',

  home: {
    // The headline reads: "Hello, I'm {name} — {headlineRest}"
    headlineRest: 'a design director leading brands, products & the teams who make them.',
    positioning: 'I run a team of designers across branding, UX/UI and web, and I still keep a pencil in the work.',
    workStack: ['Brand systems.', 'Product flows.', 'Sites that move.'],
    workBlurb: 'Selected projects from the last few years, from identity to shipped product.',
  },

  otherSkills: 'Illustration, type design, workshop facilitation & a very serious sourdough habit.',

  about: {
    intro: 'I’m a design director with fifteen years in studios and in-house teams. I care about clear ideas, well-made things and the people who make them.',
    bio: [
      'I started as a graphic designer, drawing logos in the margins of everything. Over time the work grew into brand systems, then products, then the teams behind them.',
      'Today I lead a studio of twelve designers across branding, UX/UI and web. I set direction, shape problems with clients and product leads, and make sure the team has the time and trust to do its best work.',
      'Outside the studio I illustrate, teach the occasional workshop and bake more bread than one household needs.',
    ],
    leadership: [
      { title: 'Small, senior pods', body: 'Each project gets a small team that owns it from first sketch to launch. Fewer handoffs, more ownership.' },
      { title: 'Crit is a craft', body: 'We critique the work every week, with clear roles and kind, specific feedback. It’s where most of the learning happens.' },
      { title: 'Growth you can see', body: 'A shared career ladder with real examples, so everyone knows what the next step looks like and how to get there.' },
      { title: 'I stay close to the work', body: 'I still sketch, review files and sit in research sessions. Directing from a distance makes for vague feedback.' },
    ],
  },

  services: [
    {
      title: 'Branding',
      color: 'butter',
      body: 'Identity systems that hold up from a business card to a shopfront.',
      items: ['Brand strategy & naming', 'Visual identity', 'Illustration systems', 'Guidelines & rollout'],
    },
    {
      title: 'UX/UI',
      color: 'dusty-blue',
      body: 'Products shaped by research and shipped in small, measurable steps.',
      items: ['Research & discovery', 'Product & interaction design', 'Design systems', 'Prototyping & testing'],
    },
    {
      title: 'Web',
      color: 'sage',
      body: 'Websites with a clear point of view that your team can run on its own.',
      items: ['Content & structure', 'Art direction', 'Responsive design', 'Build partner coordination'],
    },
  ],
} as const;
