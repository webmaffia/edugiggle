export type FieldSchema =
  | { type: "text"; key: string; label: string }
  | { type: "textarea"; key: string; label: string }
  | { type: "image-url"; key: string; label: string }
  | { type: "list"; key: string; label: string; itemLabel: string; fields: FieldSchema[] }
  | { type: "string-list"; key: string; label: string; itemLabel: string };

export type SectionDefinition = {
  id: string;
  label: string;
  group: "Homepage" | "Static Pages";
  revalidatePaths: string[];
  fields: FieldSchema[];
};

export const SECTION_DEFINITIONS: SectionDefinition[] = [
  {
    id: "home.hero",
    label: "Hero",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "badgeText", label: "Top badge text" },
      { type: "text", key: "headlineLine1", label: "Headline (line 1)" },
      { type: "text", key: "headlineLine2", label: "Headline (line 2, highlighted)" },
      { type: "textarea", key: "subheadline", label: "Subheadline paragraph" },
      { type: "string-list", key: "typingWords", label: "Typing effect words", itemLabel: "Word" },
      {
        type: "list",
        key: "features",
        label: "Feature badges",
        itemLabel: "Feature",
        fields: [
          { type: "text", key: "title", label: "Title" },
          { type: "text", key: "subtitle", label: "Subtitle" },
        ],
      },
      {
        type: "list",
        key: "testimonials",
        label: "Rotating testimonials",
        itemLabel: "Testimonial",
        fields: [
          { type: "text", key: "name", label: "Name" },
          { type: "text", key: "role", label: "Role" },
          { type: "textarea", key: "text", label: "Quote" },
        ],
      },
      { type: "text", key: "studentCount", label: "Live counter number (students guided)" },
    ],
  },
  {
    id: "home.statsBar",
    label: "Stats Bar",
    group: "Homepage",
    revalidatePaths: ["/", "/counselling"],
    fields: [
      {
        type: "list",
        key: "stats",
        label: "Stats",
        itemLabel: "Stat",
        fields: [
          { type: "text", key: "value", label: "Value (e.g. 1,000+)" },
          { type: "text", key: "label", label: "Label" },
        ],
      },
      { type: "text", key: "ratingValue", label: "Rating value (e.g. 4.9/5)" },
      { type: "text", key: "ratingLabel", label: "Rating label" },
    ],
  },
  {
    id: "home.painPoints",
    label: "Why Thousands Trust EduGiggle",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "heading", label: "Heading" },
      { type: "textarea", key: "subheading", label: "Subheading" },
      {
        type: "list",
        key: "cards",
        label: "Cards",
        itemLabel: "Card",
        fields: [
          { type: "text", key: "title", label: "Title" },
          { type: "text", key: "description", label: "Description" },
        ],
      },
    ],
  },
  {
    id: "home.audienceSection",
    label: "We Help You, At Every Stage",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "heading", label: "Heading" },
      {
        type: "list",
        key: "audiences",
        label: "Audience blocks",
        itemLabel: "Block",
        fields: [
          { type: "text", key: "title", label: "Title" },
          { type: "text", key: "subtitle", label: "Subtitle" },
          { type: "string-list", key: "points", label: "Points", itemLabel: "Point" },
        ],
      },
    ],
  },
  {
    id: "home.placementSupport",
    label: "Placement Support",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "heading", label: "Heading" },
      {
        type: "list",
        key: "items",
        label: "Items",
        itemLabel: "Item",
        fields: [
          { type: "text", key: "title", label: "Title" },
          { type: "text", key: "description", label: "Description" },
        ],
      },
    ],
  },
  {
    id: "home.counsellingProcess",
    label: "Counselling Process",
    group: "Homepage",
    revalidatePaths: ["/", "/counselling"],
    fields: [
      { type: "text", key: "heading", label: "Heading" },
      {
        type: "list",
        key: "steps",
        label: "Steps",
        itemLabel: "Step",
        fields: [
          { type: "text", key: "number", label: "Number (e.g. 01)" },
          { type: "text", key: "title", label: "Title" },
          { type: "text", key: "description", label: "Description" },
        ],
      },
    ],
  },
  {
    id: "home.careerAssessment",
    label: "Career Assessment",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "badgeText", label: "Badge text" },
      { type: "text", key: "heading", label: "Heading" },
      { type: "text", key: "subheading", label: "Subheading" },
      { type: "string-list", key: "benefits", label: "Benefits list", itemLabel: "Benefit" },
      { type: "text", key: "ctaLabel", label: "CTA button label" },
    ],
  },
  {
    id: "home.webinars",
    label: "Upcoming Webinars",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "heading", label: "Heading" },
      {
        type: "list",
        key: "events",
        label: "Events",
        itemLabel: "Event",
        fields: [
          { type: "text", key: "day", label: "Day (e.g. 24)" },
          { type: "text", key: "month", label: "Month (e.g. MAY)" },
          { type: "text", key: "title", label: "Title" },
          { type: "text", key: "when", label: "Date/time text" },
        ],
      },
    ],
  },
  {
    id: "home.recruiterPartners",
    label: "Recruiter Partners",
    group: "Homepage",
    revalidatePaths: ["/"],
    fields: [
      { type: "text", key: "heading", label: "Heading" },
      { type: "text", key: "subheading", label: "Subheading" },
      {
        type: "list",
        key: "logos",
        label: "Recruiter logos",
        itemLabel: "Logo",
        fields: [
          { type: "text", key: "alt", label: "Company name" },
          { type: "image-url", key: "src", label: "Logo image URL" },
        ],
      },
    ],
  },
  {
    id: "about.body",
    label: "About Us",
    group: "Static Pages",
    revalidatePaths: ["/about-us"],
    fields: [
      { type: "text", key: "heroTitle", label: "Hero title" },
      { type: "textarea", key: "heroIntro", label: "Hero intro paragraph" },
      { type: "text", key: "founderName", label: "Founder name" },
      { type: "text", key: "founderTagline", label: "Founder tagline" },
      { type: "string-list", key: "founderParagraphs", label: "Founder bio paragraphs", itemLabel: "Paragraph" },
      { type: "textarea", key: "founderQuote", label: "Pull-quote (\"In her own words\")" },
      { type: "textarea", key: "founderQuoteBody", label: "Paragraph after the pull-quote" },
      { type: "text", key: "visionHeading", label: "Vision section heading" },
      { type: "textarea", key: "visionIntro", label: "Vision section intro" },
      {
        type: "list",
        key: "visionCards",
        label: "Vision cards",
        itemLabel: "Card",
        fields: [
          { type: "text", key: "title", label: "Title" },
          { type: "textarea", key: "description", label: "Description" },
        ],
      },
      { type: "text", key: "ctaHeading", label: "Bottom CTA heading" },
      { type: "textarea", key: "ctaSubtext", label: "Bottom CTA subtext" },
    ],
  },
  {
    id: "contact.body",
    label: "Contact Us",
    group: "Static Pages",
    revalidatePaths: ["/contact-us"],
    fields: [
      { type: "text", key: "heroTitle", label: "Hero title" },
      { type: "textarea", key: "heroIntro", label: "Hero intro paragraph" },
      { type: "text", key: "phone", label: "Phone number" },
      { type: "text", key: "email", label: "Email address" },
      { type: "text", key: "location", label: "Location" },
      { type: "text", key: "sectionHeading", label: "Contact section heading" },
      { type: "textarea", key: "sectionIntro", label: "Contact section intro" },
    ],
  },
  {
    id: "privacy.body",
    label: "Privacy Policy",
    group: "Static Pages",
    revalidatePaths: ["/privacy-policy"],
    fields: [
      { type: "text", key: "title", label: "Page title" },
      { type: "text", key: "lastUpdated", label: "Last updated date" },
      { type: "textarea", key: "intro", label: "Intro paragraph" },
      {
        type: "list",
        key: "sections",
        label: "Policy sections",
        itemLabel: "Section",
        fields: [
          { type: "text", key: "title", label: "Heading" },
          { type: "textarea", key: "content", label: "Content" },
        ],
      },
    ],
  },
  {
    id: "terms.body",
    label: "Terms & Conditions",
    group: "Static Pages",
    revalidatePaths: ["/terms-and-conditions"],
    fields: [
      { type: "text", key: "title", label: "Page title" },
      { type: "text", key: "lastUpdated", label: "Last updated date" },
      { type: "textarea", key: "intro", label: "Intro paragraph" },
      {
        type: "list",
        key: "sections",
        label: "Terms sections",
        itemLabel: "Section",
        fields: [
          { type: "text", key: "title", label: "Heading" },
          { type: "textarea", key: "content", label: "Content" },
        ],
      },
    ],
  },
];

export function getSectionDefinition(id: string): SectionDefinition | undefined {
  return SECTION_DEFINITIONS.find((s) => s.id === id);
}
