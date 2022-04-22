export default {
  title: 'Rich Text',
  name: 'rich_text',
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
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    },
  ]
}
