export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      options: {
        isHighlighted: true
      }
    },
  ],
}
