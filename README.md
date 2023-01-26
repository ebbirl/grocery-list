# Overview

This repository comprises the front- and back-end components of the Nimble Approach full-stack technical test, the aim of which was to create a basic grocery list application.

## Installation and setup

Required modules for the front-end service can be installed by navigating to `./front-end` and running `npm install`.
Required modules for the back-end service can be installed by navigating to `./back-end` and running `npm install`.

## Running the services

The front-end service can be started by navigating to `./front-end` and running `npm run start`. This starts the application on port 3000.
The back-end service can be started by navigating to `./back-end`, running `npm run build`, and then `npm run start`. This starts the application on port 8080.

## Running the tests

Tests for the project have been written using Jest and React Testing Library. Tests can be run by navigating to `./front-end` and running `npm run test`, and by navigating to `./back-end` and running `npm run test`.

# Additional work

Given the timescales involved with the completion of this technical test, there is a significant amount of work still outstanding in order to bring this application up to the standard of a typical production-ready application:
- **Styling** - the front-end service is currently functional but undisputably ugly. I had originally planned to style the front end using the Tailwind CSS framework.
- **Test coverage** - I have written a selection of front- and back-end tests, but coverage of some features and functionality is lacking.
- **Features** - I would have liked to expand the application to be more fully-featured from a user standpoint. Ideally, the grocery list would have included the ability to save items to a list, to save favourites to a user, and to handle multiple different grocery lists.
- **Logging** - I have included `console.log` statements in the back-end service to indicate places where logging would be useful, but ideally these would be replaced with a proper fully-fledged logging library like Winston.
- **Repository structure** - ideally I would have split out the front- and back-end functionality into two separate services, in separate git repositories. For the sake of convenience in distributing this technical test application, I have bundled both services into this one repository.