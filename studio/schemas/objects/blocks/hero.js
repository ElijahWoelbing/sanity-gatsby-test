export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Subheadline',
      name: 'subheadline',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'CTA Text',
      name: 'ctatext',
      type: 'string'
    },
    {
      title: 'CTA Link',
      name: 'ctalink',
      type: 'url',
      validation: Rule => Rule.uri({
        allowRelative: true
      }).required()
    },
  ]
}
