export default {
  title: 'Headline Text',
  name: 'headline_text',
  type: 'object',
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'rich_text',
      validation: Rule => Rule.required()
    },
  ]
}
