/**
 * IT IS DEFINITION FOR RSS FEED
 * If you want to get more feed, please add it
 **/
import { RSSItem } from "./index";

const BASE_URL = "https://scillidan.github.io/github-search-rss";
// Query references
// https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax
// https://docs.github.com/en/github/searching-for-information-on-github/about-searching-on-github
// TYPE references
// https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection
export const SEARCH_ITEMS: RSSItem[] = [
    {
        title: "clink",
        query: "clink language:lua sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/clink.json`
    },
    {
        title: "cmder",
        query: "cmder language:lua sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/cmder.json`
    },
    {
        title: "goldendict",
        query: "goldendict sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/goldendict.json`
    },
    {
        title: "keypirinha",
        query: "keypirinha sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/keypirinha.json`
    },
    {
        title: "mdbook",
        query: "mdbook language:rust sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/mdbook.json`
    },
    {
        title: "sphinx",
        query: "sphinx language:python sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/sphinx.json`
    },
];
