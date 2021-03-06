(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.MapstringListVariableScopeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MapstringListVariableScopeRepresentation model module.
   * @module model/MapstringListVariableScopeRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>MapstringListVariableScopeRepresentation</code>.
   * @alias module:model/MapstringListVariableScopeRepresentation
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;

    return _this;
  };

  /**
   * Constructs a <code>MapstringListVariableScopeRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapstringListVariableScopeRepresentation} obj Optional instance to populate.
   * @return {module:model/MapstringListVariableScopeRepresentation} The populated <code>MapstringListVariableScopeRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();
      ApiClient.constructFromObject(data, obj, Array);

    }
    return obj;
  }





  return exports;
}));


