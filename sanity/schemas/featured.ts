import {defineField, defineType} from 'sanity'
export default defineType( {
  name: 'feature',
  type: 'document',
  title: 'Feature Menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Categoty name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
