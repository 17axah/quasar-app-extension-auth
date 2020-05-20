export default function (/* ctx */) {
  return {
    httpClient: '<%= prompts.httpClient %>',
    redirect: {
      routes: {
        auth: '<%= prompts.redirectAuth %>',
        guest: '<%= prompts.redirectGuest %>',
      },
    },
    endpoints: {
      authenticate: {
        url: '<%= prompts.loginUrl %>',
      },
      user: {
        url: '<%= prompts.userUrl %>',
      },
    },
  };
}
