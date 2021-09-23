#! /usr/bin/env node
import yargs from 'yargs';
import fetch from 'node-fetch';
import open from 'open';

const {argv} = yargs(process.argv);

const res = await fetch('https://reddit.com/.json');
const data = await res.json();

const topPost = data.data.children[0].data;
const postLink = 'https://reddit.com' + topPost.permalink;

if (argv.print) {
    console.log(`
     title: ${topPost.title}
     link: ${postLink}
    `);
} else {
    open(postLink);
}
