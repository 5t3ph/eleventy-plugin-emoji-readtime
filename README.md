## Eleventy Plugin: Emoji Read Time

> Display an estimated read time for Eleventy content, optionally with an emoji visual indicator.

## To Use

This plugin provides a filter that can be applied by passing in the Eleventy-supplied `content` variable, which work best from the _layout_ used by the content. A simple string is returned, so the text formatting is up to you.

First, install the plugin in your project:

```bash
npm install @11tyrocks/eleventy-plugin-emoji-readtime
```

Then, include it in your `.eleventy.js` config file:

```js
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(emojiReadTime);
};
```

\*_Review config options and examples below for how to modify the output_

Finally, add it as a filter to `content` wherever you'd like it to display:

```html
<p>{{ content | emojiReadTime }}</p>
```

Example output with defaults:

```html
🍿 7 min. read
```

## Config Options

| Option     | Type    | Default   |
| ---------- | ------- | --------- |
| wpm        | number  | 275       |
| showEmoji  | boolean | true      |
| emoji      | string  | 🍿        |
| label      | string  | min. read |
| bucketSize | number  | 5         |

## Config Examples

Change the emoji in use, the words-per-minute (wpm), the label, and the `bucketSize`, where `bucketSize` is what minute is divided by to determine how many emoji to show:

```js
eleventyConfig.addPlugin(emojiReadTime, {
  emoji: "📕",
  label: "mins",
  wpm: 300,
  bucketSize: 3,
});
```

Which would output:

```html
📕📕 7 mins
```

### Remove emoji from being displayed

Or, remove the emoji and only display the number of minutes and a label:

```js
eleventyConfig.addPlugin(emojiReadTime, { showEmoji: false });
```

## Credits

- Monica Powell's [egghead lesson](https://egghead.io/lessons/javascript-format-reading-time-with-emojis-on-a-gatsby-page) for the logic of creating "buckets" of time filled with emoji
- Bryan Robinson's ["Create a Plugin with 11ty"](https://www.youtube.com/watch?v=aO-NFFKjnnE) demonstration on "Learn With Jason"
- Default read time from [Medium's recommendation](https://blog.medium.com/read-time-and-you-bc2048ab620c) (Psst - disagree? Change the `wpm` value)
