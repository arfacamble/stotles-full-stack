# Stotles work sample assignment

## Getting started

This sample codebase consists of a separate client & server code.

It's set up in a simple way to make it as easy as possible to start making changes,
the only requirement is having recent versions of `node` & `npm` installed.

This is not a production ready configuration (nor production ready code),
it's only set up for easy development, including live reload.

To run the client bundler:

```
cd client
npm install
npm run dev
```

The processed code will be available at http://localhost:3001

To start the server:

```
cd server
npm install
npm run dev
```

The server will be available at http://localhost:3000 - the page is automatically configured
to use the assets served by vite on port 3001.

You should see something similar to this page:

![Search page](./screenshot.png)

### Disabling/Enabling TypeScript

If you prefer to completely disable TypeScript for a file, add `// @ts-nocheck` on the first line.
If on the other hand you'd like to enable strict type checking, modify `tsconfig.json` according to your needs.

Note that you can import plain JavaScript files that won't be fully typechecked.

### Browsing the database

You should start by looking at the migration in `./migrations` folder.
If you prefer to browse the DB using SQL, you can use the sqlite command line (just run `sqlite3 ./db.sqlite3`)
or any other SQL client that supports sqlite.

If for any reason the database becomes unusable, you can rebuild it using `./reset_db.sh` script`.

## The task

All the instructions are available [here](https://www.notion.so/stotles/Full-stack-software-engineer-work-sample-assignment-ae7c64e08f2a42a097d16cee4bc661fc).

## Notes

Warm up 3:
- value : question would go to design, how exactly do you want this presented.
If eg £450,000 further discussion about restricting values in currency column to ISO values.
Caveat, this solution would not allow per day value (but that could be implemented with eg an extra flag) and would generally restrict data source freedom of free text.
- stage : If there is no relevant date this will display eg "Open until " which will look odd. There are currently no tenders with null close date or contracts with null award date
so I will assume for now that that is enforced robustly.
- both the above, but particularly the value column text, should be pulled out into a helper class and unit tested. If I was doing this for real in production that is an example
where I would use TDD process.

### To Do

- deal with node vulnerabilities
- deal with console error, unique key for each element in list
- change post to a get
- is there a neater way to know whether to show the show more button?
- what ORM to use for this framework?
- organisation
  - models directory
  - components in directories
- consider column widths and wrapping
- consider refactor to pull cell content computation in private or helper method
- do joins properly rather than getting all buyers and computing in memory


steps for main task
- get ant design type ahead drop down
  - style as flexbox/inline
  - put in handleBuyerChange (account for undefined, ie reset)
- make api endpoint to return all buyers
- call and populate drop down
- do filtering independent of search
- ensure that search still works independently after
- does this mess with the pagination?
