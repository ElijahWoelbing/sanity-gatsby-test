export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [{
        title: 'Hero',
        type: 'hero'
      }, {
        title: 'Headline Text',
        type: 'headline_text'
      }, {
        title: 'Text Media',
        type: 'text_media'
      }
      ]
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }
  ]
}
