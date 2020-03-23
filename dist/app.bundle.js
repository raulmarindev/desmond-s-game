/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameScene.ts":
/*!**************************!*\
  !*** ./src/gameScene.ts ***!
  \**************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.score = 0;
        _this.gameOver = false;
        _this.characterKey = 'dude';
        _this.backgroundKey = 'sky';
        _this.preload = function () {
            _this.loadImages();
            _this.loadAudios();
        };
        _this.create = function () {
            _this.add.image(0, 0, _this.backgroundKey).setOrigin(0, 0);
            _this.addPlatforms();
            _this.addCharacter();
            if (_this.platforms && _this.character) {
                _this.physics.add.collider(_this.character, _this.platforms);
                _this.addStars();
                if (_this.sausages && _this.platforms) {
                    _this.physics.add.collider(_this.sausages, _this.platforms);
                    _this.physics.add.overlap(_this.character, _this.sausages, _this.eatSausage, undefined, _this);
                    _this.addControls();
                    _this.meow = _this.sound.add('meow');
                    _this.explosion = _this.sound.add('explosion');
                    _this.initScore();
                }
            }
        };
        _this.initScore = function () {
            _this.scoreText = _this.add.text(16, 16, "Score: " + _this.score, { fontSize: '32px', fill: '#000' });
        };
        _this.updateScore = function (scoreIncrement) {
            var _a;
            _this.score += scoreIncrement;
            (_a = _this.scoreText) === null || _a === void 0 ? void 0 : _a.setText("Score: " + _this.score);
        };
        _this.eatSausage = function (character, sausage) {
            var _a, _b;
            sausage.destroy();
            _this.updateScore(10);
            (_a = _this.meow) === null || _a === void 0 ? void 0 : _a.play();
            if (((_b = _this.sausages) === null || _b === void 0 ? void 0 : _b.countActive(true)) === 0) {
                _this.addBombs();
            }
        };
        _this.addControls = function () {
            _this.cursors = _this.input.keyboard.createCursorKeys();
        };
        _this.addStars = function () {
            _this.sausages = _this.physics.add.group({
                key: 'sausage',
                repeat: 11,
                setXY: { x: 12, y: 0, stepX: 70 }
            });
            _this.sausages.children.iterate(function (child) {
                var body = child.body;
                body.setBounceY(phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].FloatBetween(0.4, 0.8));
            });
        };
        _this.addBombs = function () {
            if (_this.platforms && _this.character) {
                var bombs = _this.physics.add.group();
                _this.physics.add.collider(bombs, _this.platforms);
                _this.physics.add.collider(_this.character, bombs, _this.hitBomb, undefined, _this);
                var x = (_this.character.x < 400) ? phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Between(400, 800) : phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Between(0, 400);
                var bomb = bombs.create(x, 16, 'bomb');
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Between(-200, 200), 20);
            }
        };
        _this.hitBomb = function (character, bomb) {
            var _a, _b, _c;
            _this.physics.pause();
            (_a = _this.character) === null || _a === void 0 ? void 0 : _a.setTint(0xff0000);
            (_b = _this.character) === null || _b === void 0 ? void 0 : _b.anims.play('turn');
            _this.gameOver = true;
            (_c = _this.explosion) === null || _c === void 0 ? void 0 : _c.play();
        };
        _this.pollControls = function () {
            var _a, _b, _c;
            if (_this.cursors && _this.character) {
                if ((_a = _this.cursors.left) === null || _a === void 0 ? void 0 : _a.isDown) {
                    _this.character.setVelocityX(-160);
                    _this.character.anims.play('left', true);
                }
                else if ((_b = _this.cursors.right) === null || _b === void 0 ? void 0 : _b.isDown) {
                    _this.character.setVelocityX(160);
                    _this.character.anims.play('right', true);
                }
                else {
                    _this.character.setVelocityX(0);
                    _this.character.anims.play('turn');
                }
                if (((_c = _this.cursors.up) === null || _c === void 0 ? void 0 : _c.isDown) && _this.character.body.touching.down) {
                    _this.character.setVelocityY(-470);
                }
            }
        };
        _this.addCharacter = function () {
            _this.character = _this.physics.add.sprite(100, 450, _this.characterKey).setOrigin(0, 0);
            _this.character.setBounce(0.2);
            _this.character.setCollideWorldBounds(true);
            _this.character.setGravityY(300);
            _this.anims.create({
                key: 'left',
                frames: _this.anims.generateFrameNumbers(_this.characterKey, { start: 0, end: 4 }),
                frameRate: 10,
                repeat: -1
            });
            _this.anims.create({
                key: 'turn',
                frames: [{ key: _this.characterKey, frame: 5 }],
                frameRate: 20
            });
            _this.anims.create({
                key: 'right',
                frames: _this.anims.generateFrameNumbers(_this.characterKey, { start: 6, end: 9 }),
                frameRate: 10,
                repeat: -1
            });
        };
        _this.addPlatforms = function () {
            _this.platforms = _this.physics.add.staticGroup();
            _this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
            _this.platforms.create(600, 400, 'ground');
            _this.platforms.create(50, 250, 'ground');
            _this.platforms.create(750, 220, 'ground');
        };
        return _this;
    }
    GameScene.prototype.loadAudios = function () {
        this.load.audio('meow', '/public/assets/meow.mp3');
        this.load.audio('explosion', '/public/assets/explosion.mp3');
    };
    GameScene.prototype.loadImages = function () {
        this.load.image(this.backgroundKey, '../public/assets/sky.png');
        this.load.image('ground', '../public/assets/platform.png');
        this.load.image('sausage', '../public/assets/sausage.png');
        this.load.image('bomb', '../public/assets/bomb.png');
        this.load.spritesheet(this.characterKey, '../public/assets/desmond.png', { frameWidth: 50.5, frameHeight: 40 });
    };
    GameScene.prototype.update = function () {
        this.pollControls();
    };
    return GameScene;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]));



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var _gameScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameScene */ "./src/gameScene.ts");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var gameConfig = {
    type: phaser__WEBPACK_IMPORTED_MODULE_1__["AUTO"],
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: _gameScene__WEBPACK_IMPORTED_MODULE_0__["GameScene"]
};
var game = new phaser__WEBPACK_IMPORTED_MODULE_1__["Game"](gameConfig);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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O0FBQXdDO0FBQ1A7QUFHakMsSUFBTSxVQUFVLEdBQWU7SUFDM0IsSUFBSSxFQUFFLDJDQUFXO0lBQ2pCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUU7WUFDSixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ25CLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUNELEtBQUssRUFBRSxvREFBUztDQUNuQixDQUFDO0FBRUssSUFBTSxJQUFJLEdBQUcsSUFBSSwyQ0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzYXVzYWdlczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBjdXJzb3JzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cyB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzY29yZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBtZW93OiBQaGFzZXIuU291bmQuQmFzZVNvdW5kIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBleHBsb3Npb246IFBoYXNlci5Tb3VuZC5CYXNlU291bmQgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcclxuICAgIHByaXZhdGUgZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcktleTogc3RyaW5nID0gJ2R1ZGUnO1xyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kS2V5OiBzdHJpbmcgPSAnc2t5JztcclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcclxuICAgICAgICB0aGlzLmxvYWRBdWRpb3MoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZSgwLCAwLCB0aGlzLmJhY2tncm91bmRLZXkpLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbGF0Zm9ybXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGFyYWN0ZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm1zICYmIHRoaXMuY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5jaGFyYWN0ZXIsIHRoaXMucGxhdGZvcm1zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3RhcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNhdXNhZ2VzICYmIHRoaXMucGxhdGZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuc2F1c2FnZXMsIHRoaXMucGxhdGZvcm1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc2F1c2FnZXMsIHRoaXMuZWF0U2F1c2FnZSwgdW5kZWZpbmVkLCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb250cm9scygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWVvdyA9IHRoaXMuc291bmQuYWRkKCdtZW93Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IHRoaXMuc291bmQuYWRkKCdleHBsb3Npb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTY29yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGluaXRTY29yZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoMTYsIDE2LCBgU2NvcmU6ICR7dGhpcy5zY29yZX1gLCB7IGZvbnRTaXplOiAnMzJweCcsIGZpbGw6ICcjMDAwJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTY29yZSA9IChzY29yZUluY3JlbWVudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBzY29yZUluY3JlbWVudDtcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dD8uc2V0VGV4dChgU2NvcmU6ICR7dGhpcy5zY29yZX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBlYXRTYXVzYWdlID0gKGNoYXJhY3RlcjogUGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHNhdXNhZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgc2F1c2FnZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgxMCk7XHJcbiAgICAgICAgdGhpcy5tZW93Py5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNhdXNhZ2VzPy5jb3VudEFjdGl2ZSh0cnVlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJvbWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRBdWRpb3MoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW93JywgJy9wdWJsaWMvYXNzZXRzL21lb3cubXAzJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdleHBsb3Npb24nLCAnL3B1YmxpYy9hc3NldHMvZXhwbG9zaW9uLm1wMycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEltYWdlcygpIHtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UodGhpcy5iYWNrZ3JvdW5kS2V5LCAnLi4vcHVibGljL2Fzc2V0cy9za3kucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCAnLi4vcHVibGljL2Fzc2V0cy9wbGF0Zm9ybS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NhdXNhZ2UnLCAnLi4vcHVibGljL2Fzc2V0cy9zYXVzYWdlLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYm9tYicsICcuLi9wdWJsaWMvYXNzZXRzL2JvbWIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KHRoaXMuY2hhcmFjdGVyS2V5LCAnLi4vcHVibGljL2Fzc2V0cy9kZXNtb25kLnBuZycsIHsgZnJhbWVXaWR0aDogNTAuNSwgZnJhbWVIZWlnaHQ6IDQwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wb2xsQ29udHJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvbnRyb2xzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGFkZFN0YXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2F1c2FnZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAga2V5OiAnc2F1c2FnZScsXHJcbiAgICAgICAgICAgIHJlcGVhdDogMTEsXHJcbiAgICAgICAgICAgIHNldFhZOiB7IHg6IDEyLCB5OiAwLCBzdGVwWDogNzAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhdXNhZ2VzLmNoaWxkcmVuLml0ZXJhdGUoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gY2hpbGQuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keTtcclxuICAgICAgICAgICAgYm9keS5zZXRCb3VuY2VZKFBoYXNlci5NYXRoLkZsb2F0QmV0d2VlbigwLjQsIDAuOCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGFkZEJvbWJzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtcyAmJiB0aGlzLmNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICBjb25zdCBib21icyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoYm9tYnMsIHRoaXMucGxhdGZvcm1zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5jaGFyYWN0ZXIsIGJvbWJzLCB0aGlzLmhpdEJvbWIsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgeCA9ICh0aGlzLmNoYXJhY3Rlci54IDwgNDAwKSA/IFBoYXNlci5NYXRoLkJldHdlZW4oNDAwLCA4MDApIDogUGhhc2VyLk1hdGguQmV0d2VlbigwLCA0MDApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJvbWIgPSBib21icy5jcmVhdGUoeCwgMTYsICdib21iJyk7XHJcbiAgICAgICAgICAgIGJvbWIuc2V0Qm91bmNlKDEpO1xyXG4gICAgICAgICAgICBib21iLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgICAgICAgICAgYm9tYi5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBoaXRCb21iID0gKGNoYXJhY3RlcjogUGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3QsIGJvbWI6IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXI/LnNldFRpbnQoMHhmZjAwMDApO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyPy5hbmltcy5wbGF5KCd0dXJuJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24/LnBsYXkoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwb2xsQ29udHJvbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29ycyAmJiB0aGlzLmNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQ/LmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuc2V0VmVsb2NpdHlYKC0xNjApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmFuaW1zLnBsYXkoJ2xlZnQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnNvcnMucmlnaHQ/LmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuc2V0VmVsb2NpdHlYKDE2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbXMucGxheSgncmlnaHQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldFZlbG9jaXR5WCgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5hbmltcy5wbGF5KCd0dXJuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnNvcnMudXA/LmlzRG93biAmJiB0aGlzLmNoYXJhY3Rlci5ib2R5LnRvdWNoaW5nLmRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldFZlbG9jaXR5WSgtNDcwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSgxMDAsIDQ1MCwgdGhpcy5jaGFyYWN0ZXJLZXkpLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuc2V0Qm91bmNlKDAuMik7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldEdyYXZpdHlZKDMwMCk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnbGVmdCcsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyh0aGlzLmNoYXJhY3RlcktleSwgeyBzdGFydDogMCwgZW5kOiA0IH0pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAndHVybicsXHJcbiAgICAgICAgICAgIGZyYW1lczogW3sga2V5OiB0aGlzLmNoYXJhY3RlcktleSwgZnJhbWU6IDUgfV0sXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMjBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyh0aGlzLmNoYXJhY3RlcktleSwgeyBzdGFydDogNiwgZW5kOiA5IH0pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgYWRkUGxhdGZvcm1zID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmNyZWF0ZSg0MDAsIDU2OCwgJ2dyb3VuZCcpLnNldFNjYWxlKDIpLnJlZnJlc2hCb2R5KCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMuY3JlYXRlKDYwMCwgNDAwLCAnZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMuY3JlYXRlKDUwLCAyNTAsICdncm91bmQnKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5jcmVhdGUoNzUwLCAyMjAsICdncm91bmQnKTtcclxuICAgIH07XHJcblxyXG5cclxufSIsImltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZVNjZW5lJztcclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBHYW1lQ29uZmlnID0gUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZztcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IEdhbWVDb25maWcgPSB7XHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHdpZHRoOiA4MDAsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZ3Jhdml0eTogeyB5OiAzMDAgfSxcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNjZW5lOiBHYW1lU2NlbmVcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyJdLCJzb3VyY2VSb290IjoiIn0=