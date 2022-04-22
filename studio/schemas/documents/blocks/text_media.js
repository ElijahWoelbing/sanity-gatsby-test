export default {
  name: 'text_media',
  type: 'document',
  title: 'Text Media',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    },
  ]
}
