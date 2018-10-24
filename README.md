# Getting started

This is XUI API. 
Please set domain at Pre-request Scripts

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=XUI%20REST%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=XUI%20REST%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `XUIRESTAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=XUI%20REST%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=XUI%20REST%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=XUI%20REST%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=XUI%20REST%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  XUI REST APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=XUI%20REST%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ConferenceController](#conference_controller)
* [RouteController](#route_controller)
* [OthersController](#others_controller)
* [GatewayController](#gateway_controller)
* [UserController](#user_controller)

## <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ConferenceController;
```

### <a name="create_conference_rooms_post2"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferenceRoomsPost2") createConferenceRoomsPost2

> TODO: Add Description


```javascript
function createConferenceRoomsPost2(accept, xXTRAAUTHID, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'Accept';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';
    var body = new DeleteRoom6001Request({"key":"value"});

    controller.createConferenceRoomsPost2(accept, xXTRAAUTHID, contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_conferences_get2"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.getConferencesGet2") getConferencesGet2

> TODO: Add Description


```javascript
function getConferencesGet2(accept, xXTRAAUTHID, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'Accept';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';

    controller.getConferencesGet2(accept, xXTRAAUTHID, contentType, function(error, response, context) {

    
    });
```



### <a name="create_conferences7001_post"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferences7001Post") createConferences7001Post

> TODO: Add Description


```javascript
function createConferences7001Post(accept, xXTRAAUTHID, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'Accept';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';
    var body = new CreateConference7001AndInvite1014Request({"key":"value"});

    controller.createConferences7001Post(accept, xXTRAAUTHID, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_conferences7001_by_member_id_put"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.updateConferences7001ByMemberIdPut") updateConferences7001ByMemberIdPut

> TODO: Add Description


```javascript
function updateConferences7001ByMemberIdPut(accept, xXTRAAUTHID, contentType, body, memberId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| memberId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'Accept';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';
    var body = new ActionForMemberRequest({"key":"value"});
    var memberId = 'memberId';

    controller.updateConferences7001ByMemberIdPut(accept, xXTRAAUTHID, contentType, body, memberId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="route_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RouteController") RouteController

### Get singleton instance

The singleton instance of the ``` RouteController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RouteController;
```

### <a name="delete_gateways_by_id_delete"></a>![Method: ](https://apidocs.io/img/method.png ".RouteController.deleteGatewaysByIdDelete") deleteGatewaysByIdDelete

> TODO: Add Description


```javascript
function deleteGatewaysByIdDelete(id, xXTRAAUTHID, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';

    controller.deleteGatewaysByIdDelete(id, xXTRAAUTHID, contentType, function(error, response, context) {

    
    });
```



### <a name="delete_routes_by_id_delete"></a>![Method: ](https://apidocs.io/img/method.png ".RouteController.deleteRoutesByIdDelete") deleteRoutesByIdDelete

> TODO: Add Description


```javascript
function deleteRoutesByIdDelete(id, xXTRAAUTHID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';

    controller.deleteRoutesByIdDelete(id, xXTRAAUTHID, function(error, response, context) {

    
    });
```



### <a name="create_routes_post"></a>![Method: ](https://apidocs.io/img/method.png ".RouteController.createRoutesPost") createRoutesPost

> TODO: Add Description


```javascript
function createRoutesPost(xXTRAAUTHID, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';
    var body = new CreateRouteRequest({"key":"value"});

    controller.createRoutesPost(xXTRAAUTHID, contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_routes_get"></a>![Method: ](https://apidocs.io/img/method.png ".RouteController.getRoutesGet") getRoutesGet

> TODO: Add Description


```javascript
function getRoutesGet(xXTRAAUTHID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';

    controller.getRoutesGet(xXTRAAUTHID, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="others_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OthersController") OthersController

### Get singleton instance

The singleton instance of the ``` OthersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OthersController;
```

### <a name="get_cdrs_get"></a>![Method: ](https://apidocs.io/img/method.png ".OthersController.getCdrsGet") getCdrsGet

> TODO: Add Description


```javascript
function getCdrsGet(xXTRAAUTHID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';

    controller.getCdrsGet(xXTRAAUTHID, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="gateway_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GatewayController") GatewayController

### Get singleton instance

The singleton instance of the ``` GatewayController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GatewayController;
```

### <a name="update_gateways_control_by_id_put"></a>![Method: ](https://apidocs.io/img/method.png ".GatewayController.updateGatewaysControlByIdPut") updateGatewaysControlByIdPut

> TODO: Add Description


```javascript
function updateGatewaysControlByIdPut(id, xXTRAAUTHID, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';
    var body = new KillGatewayRequest({"key":"value"});

    controller.updateGatewaysControlByIdPut(id, xXTRAAUTHID, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_gateways_post"></a>![Method: ](https://apidocs.io/img/method.png ".GatewayController.createGatewaysPost") createGatewaysPost

> TODO: Add Description


```javascript
function createGatewaysPost(xXTRAAUTHID, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';
    var contentType = 'Content-Type';
    var body = new CreateGatewayRequest({"key":"value"});

    controller.createGatewaysPost(xXTRAAUTHID, contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_gateways_get"></a>![Method: ](https://apidocs.io/img/method.png ".GatewayController.getGatewaysGet") getGatewaysGet

> TODO: Add Description


```javascript
function getGatewaysGet(xXTRAAUTHID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';

    controller.getGatewaysGet(xXTRAAUTHID, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="user_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UserController") UserController

### Get singleton instance

The singleton instance of the ``` UserController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UserController;
```

### <a name="delete_users_by_id_delete"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.deleteUsersByIdDelete") deleteUsersByIdDelete

> TODO: Add Description


```javascript
function deleteUsersByIdDelete(id, accept, xXTRAAUTHID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var accept = 'Accept';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';

    controller.deleteUsersByIdDelete(id, accept, xXTRAAUTHID, function(error, response, context) {

    
    });
```



### <a name="create_users_post"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUsersPost") createUsersPost

> TODO: Add Description


```javascript
function createUsersPost(contentType, cookie, connection, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| cookie |  ``` Required ```  | TODO: Add a parameter description |
| connection |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'content-type';
    var cookie = 'Cookie';
    var connection = 'Connection';
    var body = new CreateUser9001Request({"key":"value"});

    controller.createUsersPost(contentType, cookie, connection, body, function(error, response, context) {

    
    });
```



### <a name="get_users_get"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getUsersGet") getUsersGet

> TODO: Add Description


```javascript
function getUsersGet(accept, xXTRAAUTHID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| xXTRAAUTHID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'Accept';
    var xXTRAAUTHID = 'X-XTRA-AUTH-ID';

    controller.getUsersGet(accept, xXTRAAUTHID, function(error, response, context) {

    
    });
```



### <a name="create_sessions_post"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createSessionsPost") createSessionsPost

> TODO: Add Description


```javascript
function createSessionsPost(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var body = new LoginRequest({"key":"value"});

    controller.createSessionsPost(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



