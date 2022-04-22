export default {
  title: 'Navigation Item',
  name: 'navigation_item',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({
        allowRelative: true
      }).required()
    },
  ]
}
