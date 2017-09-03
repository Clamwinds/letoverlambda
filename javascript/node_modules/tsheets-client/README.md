# tsheets-client
Simple client to the [TSheets REST API](http://developers.tsheets.com/docs/api/), for time reporting etc.

## Authentication
Set the environment variable `NODE_TSHEETS_API_CLIENT_TOKEN` to a TSheets access token.

## API

### `reportTime(params, callback)`

Reports time for a user, using the provided job code.

**Params**

| Parameter        | Description                                   | Type   | Required |
|------------------|-----------------------------------------------|--------|----------|
| api_token        | TSheets API token to use for the request.     | string | Yes      |
| user_id          | ID of TSheets user to report time for.        | number | Yes      |
| jobcode_id       | TSheets job code ID.                          | number | Yes      |
| duration_seconds | Total seconds to report on job code.          | number | Yes      |
| date             | `YYYY-MM-DD` for the date to report time for. | string | Yes      |



### `getTimesheets(params, callback)`

Gets timesheets for the specified user(s) for the provided time period.

**Params**

| Parameter  | Description                                      | Type     | Required |
|------------|--------------------------------------------------|----------|----------|
| api_token  | TSheets API token to use for the request.        | string   | Yes      |
| start_date | `YYYY-MM-DD` for the starting date.              | string   | Yes      |
| end_date   | `YYYY-MM-DD` for the end date.                   | string   | Yes      |
| user_ids   | Array of TSheets user IDs to get timesheets for. | number[] | No       |
| page       | Page number for timesheets (max 50 per page).    | number   | No       |
