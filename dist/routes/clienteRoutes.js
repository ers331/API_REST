"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ClienteController = require('../controllers/ClienteController'); var _ClienteController2 = _interopRequireDefault(_ClienteController);

const router = new (0, _express.Router)();

router.post('/', _ClienteController2.default.store);
router.get('/', _ClienteController2.default.index);
router.get('/:id', _ClienteController2.default.show);
router.put('/:id', _ClienteController2.default.update);
router.delete('/:id', _ClienteController2.default.delete);

exports. default = router;
