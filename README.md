### Full Stack CRUD Application using React, Express, Knex, Objection

**To run the app**,

- download/clone the repo
- open MySQL Workbench and create a schema called `brainstation`
- update credentials in knex connection object in `server/knexfile.js`
- in the `client` directory, add `.env` file with following contents

```
    REACT_APP_BACKEND_URL=http://localhost:5500
```

- in the root directory, add a `.env` with following contents

```
    PORT=5500
```
- in the root directory, `npm i`
- in the root directory, `npm run dev`
