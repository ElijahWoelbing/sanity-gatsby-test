export default {
  name: 'rich_text',
  type: 'document',
  title: 'Rich Text',
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
