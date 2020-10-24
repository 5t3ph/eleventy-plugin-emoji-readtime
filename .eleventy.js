module.exports = (eleventyConfig, options) => {
  const defaults = {
    wpm: 275,
    showEmoji: true,
    emoji: "🍿",
    label: "min. read",
    bucketSize: 5,
  };

  eleventyConfig.addFilter("emojiReadTime", (content) => {
    const { wpm, showEmoji, emoji, label, bucketSize } = {
      ...defaults,
      ...options,
    };
    const minutes = Math.ceil(content.trim().split(/\s+/).length / wpm);
    const buckets = Math.round(minutes / bucketSize) || 1;

    const displayLabel = `${minutes} ${label}`;

    if (showEmoji) {
      return `${new Array(buckets || 1).fill(emoji).join("")}  ${displayLabel}`;
    }

    return displayLabel;
  });
};
