# Tsheets Hubot Script

[![Build Status](https://travis-ci.org/Springworks/hubot-tsheets.png?branch=master)](https://travis-ci.org/Springworks/hubot-tsheets)
[![Coverage Status](https://coveralls.io/repos/Springworks/hubot-tsheets/badge.png?branch=master)](https://coveralls.io/r/Springworks/hubot-tsheets?branch=master)

## Summary

```coffee
# ./tsheets.coffee
#
# Description:
#   Simple TSheets reporting.
#
# Configuration:
#   HUBOT_TSHEETS_API_CLIENT_TOKEN = <tsheets api token>
#
# Commands:
#   tsheets report <jobcode name> <hours> [<date>] - Reports time for a specific job code
#   tsheets list jobcodes - Lists all job codes available to use
#   tsheets I am <tsheets user id> - Connects a TSheets user to the current Hubot user
#   tsheets summary [<start date>] [<end date>] - Shows reports for all users between dates, defaults to current week
#
# Notes:
#   Requires a TSheets account with API access:
#   Planned to be implemented:
#     hubot tsheets show mine <since time> - Shows reports for the current user
#

```

## Development

### Contributing

1. Create a branch
2. Write tests --> Implement your functionality --> Repeat
3. Make a pull request

### Running tests

**Required environment variables**

- `HUBOT_TSHEETS_API_CLIENT_TOKEN` - API token for the TSheets API

**Optional environment variables**

- `TEST_HUBOT_TSHEETS_USER_ID` - TSheets user ID to report time for
- `TEST_HUBOT_TSHEETS_JOBCODE_ID` - TSheets jobcode ID to use when reporting time

**Example**
```sh
$ HUBOT_TSHEETS_API_CLIENT_TOKEN="super-secret" \
  TEST_HUBOT_TSHEETS_USER_ID=123 \
  TEST_HUBOT_TSHEETS_JOBCODE_ID=456 \
  npm test
```

## License

MIT
