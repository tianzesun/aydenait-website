// People shown in the About page's "Our Team" section. The section is hidden while this list is empty.
// Only add people who have agreed to appear, with a photo they've approved (in public/team/).
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [];
