export default {
  title: 'Navigation Menu',
  name: 'navigation_menu',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Navigation Items',
      name: 'navigation_items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            title: 'Navigation Item',
            type: 'navigation_item'
          }
        }
      ]
    }
  ]
}
