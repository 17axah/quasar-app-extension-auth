/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    {
      name: 'name',
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      name: 'httpClient',
      type: 'list',
      message: 'With what you want to send http requests (You can change later)',
      choices: [
        {
          name: 'Axios',
          value: 'axios',
        },
        {
          name: 'Vue-resource',
          value: 'http',
        },
      ],
    },
    {
      name: 'redirectAuth',
      type: 'input',
      required: true,
      message: 'Where to redirect an authorized user (You can change later)',
      default: '/account',
    },
    {
      name: 'redirectGuest',
      type: 'input',
      required: true,
      message: 'Where to redirect an unauthorized user (You can change later)',
      default: '/',
    },
    {
      name: 'loginUrl',
      type: 'input',
      required: true,
      message: 'URL for authentication (You can change later)',
      default: '/auth/login',
    },
    {
      name: 'userUrl',
      type: 'input',
      required: true,
      message: 'URL for user data (You can change later)',
      default: '/auth/user',
    },
  ];
}
