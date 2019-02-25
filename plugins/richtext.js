const document = {
  nodeType: 'document',
  content: [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value: 'Hello',
          marks: [{ type: 'bold' }]
        },
        {
          nodeType: 'text',
          value: ' world!',
          marks: [{ type: 'italic' }]
        }
      ]
    }
  ]
}

documentToHtmlString(document)
