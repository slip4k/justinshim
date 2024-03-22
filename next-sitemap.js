const URL = 'https://www.justinshim.com';
module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
