export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616c4267319f031da7eb9c39",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-leaflet-blog-studio",
                  apiId: "0f8ef75a-2c9b-4ba1-98e7-9500369c8efe",
                },
                {
                  buildHookId: "616c4267a4aa9e0eb3c7ee3e",
                  title: "Blog Website",
                  name: "sanity-gatsby-leaflet-blog",
                  apiId: "7a117f98-3ec5-4039-9012-771908975de8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bathrobe/sanity-gatsby-leaflet-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-leaflet-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
