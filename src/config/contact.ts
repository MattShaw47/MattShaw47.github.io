export interface ContactDetails {
  email?: string;
  github?: string;
  linkedin?: string;
  phone?: string;
  resume?: string;
}

// Add personal contact values here when they are ready. Undefined values are not rendered.
export const contactDetails: ContactDetails = {
  email: 'matthewshaw362783@gmail.com',
  github: 'https://github.com/MattShaw47',
  linkedin: undefined,
  phone: '706-825-9384',
  resume: '/resume.pdf',
};
