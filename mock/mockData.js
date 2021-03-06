const posts = [
  {
    ID: 1,
    CreatedAt: "2020-04-13T15:06:01.656226Z",
    UpdatedAt: "2020-04-13T15:06:01.656226Z",
    DeletedAt: null,
    title: "This is second post",
    content:
      "Second Post: With multi-page apps, these three things come for free. There is nothing extra you have to do for any of it. With single-page apps, because you aren't navigating to an entirely new page, you have to do real work to deal with these three things that your users expect to just work. You need to ensure that navigating within your app adjusts the URL appropriately. You need to ensure your browser's history is properly synchronized with each navigation to allow users to use the back and forward buttons. If users bookmark a particular view or copy/paste a URL to access later, you need to ensure that your single-page app takes the user to the correct place",
    tags: "general",
    status: 1,
    autherID: 1,
  },
];

const authors = [
  { id: 1, name: "Nitin Singh" },
  { id: 2, name: "Monika Deol" },
  { id: 3, name: "Kapil Gill" },
];

const tags = [
  { id: 1, name: "Coronovirus" },
  { id: 2, name: "Stories" },
  { id: 3, name: "World" },
  { id: 4, name: "Politics" },
  { id: 5, name: "Technology" },
  { id: 6, name: "Culture" },
  { id: 7, name: "Art" },
  { id: 8, name: "Life" },
  { id: 9, name: "Social" },
  { id: 10, name: "more..." },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  posts,
  authors,
  tags,
};
