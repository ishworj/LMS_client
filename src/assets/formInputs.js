export const inputFields = [
  {
    label: "Title",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Learn Javascript",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    required: true,
    placeholder: "Uncle Bob",
  },
  {
    label: "Thumbnail",
    name: "thumbnail",
    type: "url",
    required: true,
    placeholder: "https://path-to-image.com",
  },
  {
    label: "ISBN",
    name: "isbn",
    type: "text",
    required: true,
    placeholder: "9876LKJHHG",
  },
  {
    label: "Genre",
    name: "genre",
    type: "text",
    required: true,
    placeholder: "GENRE",
  },
  {
    label: "Published Year",
    name: "publishedYear",
    type: "number",
    min: "1000",
    required: true,
    placeholder: "2020",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
    maxLength: "5000",
    required: true,
    placeholder: "Book summary ...",
    rows: "5",
  },
];
