import { blogs, lookupBlogFromUrl } from "./blogs";

describe("blogs", () => {
  const mockBlogDatum = {
    title: "Recruiter FAQ",
    url: "blog/mock",
    description: "Answers to common questions I get from recruiters.",
    longDescription: `An attempt to save you, the recruiter, some time, with a centralized resource answering the most common questions I receive during screening calls.  I'm looking forward to speaking with you further!`,
    md: null,
    img: {
      emoji: "🤷",
    },
  };
  blogs.data = [mockBlogDatum];

  describe("lookupBlogFromUrl", () => {
    it("should lookup a blog correctly from a url and return the blog JSON", () => {
      expect(lookupBlogFromUrl("blog/mock", blogs)).toEqual(mockBlogDatum);
    });
    it("should return undefined for a non-existant blog", () => {
      expect(
        lookupBlogFromUrl("blog/this-blog-does-not-exist-asldfkjalsdfkj", blogs)
      ).toEqual(undefined);
    });
  });
});
