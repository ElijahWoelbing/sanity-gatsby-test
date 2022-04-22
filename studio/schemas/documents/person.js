export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Roll',
      name: 'roll',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'image',
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
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { name: 'email' })
    },
    {
      title: 'Phone Number',
      name: 'phonenumber',
      type: 'string',
      validation: Rule => Rule.regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, { name: 'phone number' })
    }
  ],
}
