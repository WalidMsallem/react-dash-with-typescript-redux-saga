## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
 
2.  Clone this repo using `git clone git@github.com:WalidMsallem/react-dash-with-typescript-redux-saga.git`

````
$ git clone git@github.com:WalidMsallem/react-dash-with-typescript-redux-saga.gi
````

3.  Move to the appropriate directory: `cd react-dash-with-typescript-redux-saga`.

4. Install frontend dependencies and the project.
````
$ cd client 
$ npm install
$ npm start
````

5.  4. Install backend dependencies and the project.
````
$ cd mock-backend  
$ npm install
$ npm start
````
 
 _At this point the frontend will run under `http://localhost:3000` and the backend/api will run under `http://localhost:5000`._
 
Now you're ready to rumble!

## For testing
In order to test the project, please use one of these login details to connect : 
| Users                  | identifiant                                                           | password                       
| --------------------- | --------------------------------------------------------------------- | ---------------------------- | 
| User 1 (Chuck)        | urtoob                                        | ToobRU                |                |
| User 2 (Willy)             | swagtv                                                 | bling$bling |    
User 3 (Harry)  |shinynewclient |siriusblack  |

## Contributor
Developpeur : Walid M'sallem ( Full stack developpeur ) 
Contact : walidmsallem@gmail.com 

## Features

This frontend manages application state using **Redux**, makes it
immutable with  **Immer* and keeps access performant  **reselect**.

For managing asynchronous flows (e.g. logging in) we use **redux-saga**.

For routing, we use **react-router** *connected-react-router**.

**Antd**  as a design system, and **react-chartjs-2**  to display charts 

we are using a mock backend for you to make requests (**it has been modified compared to the original repository**), [docs](mock-backend/README.md)

## Custom component: multi-select

The component is under client/src/components/shared/MultiSelect , and it accepts the following props :

| Prop                  | Description                                                           | Type                         | Default        |
| --------------------- | --------------------------------------------------------------------- | ---------------------------- | -------------- |
| `labelledBy`          | value for `aria-labelledby`                                           | `string`                     |                |
| `options`             | options for dropdown                                                  | `[{label, value, disabled}]` |                |
| `value`               | pre-selected rows                                                     | `[{label, value}]`           | `[]`           |
| `hasSelectAll`        | toggle 'Select All' option                                            | `boolean`                    | `true`        
| `shouldToggleOnHover` | toggle dropdown on hover option                                       | `boolean`                    | `false`        |
 `onChange`            | onChange callback                                                     | `function`                   |                |
| `disabled`            | disable dropdown                                                      | `boolean`                    | `false`        |
| `selectAllLabel`      | _select all_ label                                                    | `string`                     |                |
 `className`           | class name for parent component                                       | `string`                     | `multi-select` |
 `ArrowRenderer`       | Custom Arrow Icon for Dropdown                                        | `ReactNode`                  |                |
 `ClearSelectedIcon`   | Custom Clear Icon for Selected Items                                  | `ReactNode`                  |                |


