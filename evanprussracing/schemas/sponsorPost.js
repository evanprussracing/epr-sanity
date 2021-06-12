export default {
  name: 'sponsorPost',
  title: 'Sponsor Post',
  type: 'document',
  fields: [
    {
      name: 'sponsorName',
      title: 'Sponsor Name',
      type: 'string',
    },
    {
      name: 'websiteUrl',
      title: 'Website Url',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'sponsorName',
        maxLength: 96,
      },
    },
    {
      name: 'sponsorLogo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram Url',
      type: 'url',
    },
    {
      name: 'twitterUrl',
      title: 'Twiiter Url',
      type: 'url',
    },
    {
      name: 'linkedinUrl',
      title: 'Linkedin Url',
      type: 'url',
    }
  ]
}