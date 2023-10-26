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
        title: "keypirinha",
        query: "keypirinha sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/keypirinha-repo.json`
    },
    {
        title: "mpv",
        query: "mpv sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/mpv-repo.json`
    },
    {
        title: "datasette",
        query: "datasette sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/datasette-repo.json`
    },
    {
        title: "autohotkey",
        query: "autohotkey sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/autohotkey-repo.json`
    },
    {
        title: "sublime plugin",
        query: "sublime plugin sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/sublime-plugin-repo.json`
    },
    {
        title: "obsidian plugin",
        query: "obsidian plugin sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/obsidian-plugin-repo.json`
    },
    {
        title: "renpy",
        query: "renpy sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/renpy-repo.json`
    },
    {
        title: "mkdocs plugin",
        query: "mkdocs plugin sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/mkdocs-plugin.json`
    },
    {
        title: "goldendict",
        query: "goldendict sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/goldendict.json`
    },
];