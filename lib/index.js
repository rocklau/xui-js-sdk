/**
  * @module XUIRESTAPILib
  *
  * This is XUI API.  Please set domain at Pre-request Scripts
  */

'use strict';

const Configuration = require('./configuration');
const ConferenceController = require('./Controllers/ConferenceController');
const RouteController = require('./Controllers/RouteController');
const OthersController = require('./Controllers/OthersController');
const GatewayController = require('./Controllers/GatewayController');
const UserController = require('./Controllers/UserController');
const CreateRouteRequest = require('./Models/CreateRouteRequest');
const ActionForMemberRequest = require('./Models/ActionForMemberRequest');
const CreateGatewayRequest = require('./Models/CreateGatewayRequest');
const KillGatewayRequest = require('./Models/KillGatewayRequest');
const LoginRequest = require('./Models/LoginRequest');
const DeleteRoom6001Request = require('./Models/DeleteRoom6001Request');
const CreateUser9001Request = require('./Models/CreateUser9001Request');
const CreateRoom6001Request = require('./Models/CreateRoom6001Request');
const CreateConference7001AndInvite1014Request =
  require('./Models/CreateConference7001AndInvite1014Request');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of XUIRESTAPILib
    Configuration,
    // controllers of XUIRESTAPILib
    ConferenceController,
    RouteController,
    OthersController,
    GatewayController,
    UserController,
    // models of XUIRESTAPILib
    CreateRouteRequest,
    ActionForMemberRequest,
    CreateGatewayRequest,
    KillGatewayRequest,
    LoginRequest,
    DeleteRoom6001Request,
    CreateUser9001Request,
    CreateRoom6001Request,
    CreateConference7001AndInvite1014Request,
    // exceptions of XUIRESTAPILib
    APIException,
};

module.exports = initializer;
