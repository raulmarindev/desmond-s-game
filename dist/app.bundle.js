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
            var _a, _b, _c, _d;
            if (sausage.active) {
                (_a = _this.sausages) === null || _a === void 0 ? void 0 : _a.killAndHide(sausage);
                _this.updateScore(10);
                (_b = _this.meow) === null || _b === void 0 ? void 0 : _b.play();
                if (((_c = _this.sausages) === null || _c === void 0 ? void 0 : _c.countActive(true)) === 0) {
                    _this.sausages.children.iterate(function (s) {
                        var body = s.body;
                        body.setBounceY(phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].FloatBetween(0.4, 0.8));
                        s.setActive(true);
                    });
                    _this.sausages.setXY(12, 0, 70);
                    (_d = _this.sausages) === null || _d === void 0 ? void 0 : _d.setVisible(true);
                    _this.addBombs();
                }
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
            _this.sausages.children.iterate(function (s) {
                var body = s.body;
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
        if (this.gameOver)
            return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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QkFBK0IsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsOEJBQThCLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNiLE9BQU87UUFFWCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXlHTCxnQkFBQztBQUFELENBQUMsQ0F2TThCLDRDQUFZLEdBdU0xQzs7Ozs7Ozs7Ozs7Ozs7QUN6TUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNQO0FBR2pDLElBQU0sVUFBVSxHQUFlO0lBQzNCLElBQUksRUFBRSwyQ0FBVztJQUNqQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNuQixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxLQUFLLEVBQUUsb0RBQVM7Q0FDbkIsQ0FBQztBQUVLLElBQU0sSUFBSSxHQUFHLElBQUksMkNBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybXM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgc2F1c2FnZXM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgY3Vyc29yczogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXMgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgc2NvcmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgbWVvdzogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgZXhwbG9zaW9uOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzY29yZSA9IDA7XHJcbiAgICBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJLZXk6IHN0cmluZyA9ICdkdWRlJztcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZEtleTogc3RyaW5nID0gJ3NreSc7XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9zKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgMCwgdGhpcy5iYWNrZ3JvdW5kS2V5KS5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUGxhdGZvcm1zKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2hhcmFjdGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtcyAmJiB0aGlzLmNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnBsYXRmb3Jtcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0YXJzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zYXVzYWdlcyAmJiB0aGlzLnBsYXRmb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnNhdXNhZ2VzLCB0aGlzLnBsYXRmb3Jtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNhdXNhZ2VzLCB0aGlzLmVhdFNhdXNhZ2UsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lb3cgPSB0aGlzLnNvdW5kLmFkZCgnbWVvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb24gPSB0aGlzLnNvdW5kLmFkZCgnZXhwbG9zaW9uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2NvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U2NvcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KDE2LCAxNiwgYFNjb3JlOiAke3RoaXMuc2NvcmV9YCwgeyBmb250U2l6ZTogJzMycHgnLCBmaWxsOiAnIzAwMCcgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUgPSAoc2NvcmVJbmNyZW1lbnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gc2NvcmVJbmNyZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQ/LnNldFRleHQoYFNjb3JlOiAke3RoaXMuc2NvcmV9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZWF0U2F1c2FnZSA9IChjaGFyYWN0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0LCBzYXVzYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChzYXVzYWdlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdXNhZ2VzPy5raWxsQW5kSGlkZShzYXVzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVvdz8ucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2F1c2FnZXM/LmNvdW50QWN0aXZlKHRydWUpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdXNhZ2VzLmNoaWxkcmVuLml0ZXJhdGUocyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnNldEJvdW5jZVkoUGhhc2VyLk1hdGguRmxvYXRCZXR3ZWVuKDAuNCwgMC44KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdXNhZ2VzLnNldFhZKDEyLCAwLCA3MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdXNhZ2VzPy5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCb21icygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRBdWRpb3MoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW93JywgJy9wdWJsaWMvYXNzZXRzL21lb3cubXAzJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdleHBsb3Npb24nLCAnL3B1YmxpYy9hc3NldHMvZXhwbG9zaW9uLm1wMycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEltYWdlcygpIHtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UodGhpcy5iYWNrZ3JvdW5kS2V5LCAnLi4vcHVibGljL2Fzc2V0cy9za3kucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCAnLi4vcHVibGljL2Fzc2V0cy9wbGF0Zm9ybS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NhdXNhZ2UnLCAnLi4vcHVibGljL2Fzc2V0cy9zYXVzYWdlLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYm9tYicsICcuLi9wdWJsaWMvYXNzZXRzL2JvbWIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KHRoaXMuY2hhcmFjdGVyS2V5LCAnLi4vcHVibGljL2Fzc2V0cy9kZXNtb25kLnBuZycsIHsgZnJhbWVXaWR0aDogNTAuNSwgZnJhbWVIZWlnaHQ6IDQwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5wb2xsQ29udHJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvbnRyb2xzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGFkZFN0YXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2F1c2FnZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAga2V5OiAnc2F1c2FnZScsXHJcbiAgICAgICAgICAgIHJlcGVhdDogMTEsXHJcbiAgICAgICAgICAgIHNldFhZOiB7IHg6IDEyLCB5OiAwLCBzdGVwWDogNzAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhdXNhZ2VzLmNoaWxkcmVuLml0ZXJhdGUocyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBzLmJvZHkgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHk7XHJcbiAgICAgICAgICAgIGJvZHkuc2V0Qm91bmNlWShQaGFzZXIuTWF0aC5GbG9hdEJldHdlZW4oMC40LCAwLjgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRCb21icyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybXMgJiYgdGhpcy5jaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9tYnMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKGJvbWJzLCB0aGlzLnBsYXRmb3Jtcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuY2hhcmFjdGVyLCBib21icywgdGhpcy5oaXRCb21iLCB1bmRlZmluZWQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHggPSAodGhpcy5jaGFyYWN0ZXIueCA8IDQwMCkgPyBQaGFzZXIuTWF0aC5CZXR3ZWVuKDQwMCwgODAwKSA6IFBoYXNlci5NYXRoLkJldHdlZW4oMCwgNDAwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBib21iID0gYm9tYnMuY3JlYXRlKHgsIDE2LCAnYm9tYicpO1xyXG4gICAgICAgICAgICBib21iLnNldEJvdW5jZSgxKTtcclxuICAgICAgICAgICAgYm9tYi5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XHJcbiAgICAgICAgICAgIGJvbWIuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgaGl0Qm9tYiA9IChjaGFyYWN0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0LCBib21iOiBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyPy5zZXRUaW50KDB4ZmYwMDAwKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3Rlcj8uYW5pbXMucGxheSgndHVybicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uPy5wbGF5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcG9sbENvbnRyb2xzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMgJiYgdGhpcy5jaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0Py5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldFZlbG9jaXR5WCgtMTYwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5hbmltcy5wbGF5KCdsZWZ0JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJzb3JzLnJpZ2h0Py5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldFZlbG9jaXR5WCgxNjApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmFuaW1zLnBsYXkoJ3JpZ2h0JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5zZXRWZWxvY2l0eVgoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbXMucGxheSgndHVybicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJzb3JzLnVwPy5pc0Rvd24gJiYgdGhpcy5jaGFyYWN0ZXIuYm9keS50b3VjaGluZy5kb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5zZXRWZWxvY2l0eVkoLTQ3MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgYWRkQ2hhcmFjdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoMTAwLCA0NTAsIHRoaXMuY2hhcmFjdGVyS2V5KS5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldEJvdW5jZSgwLjIpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3Rlci5zZXRHcmF2aXR5WSgzMDApO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2xlZnQnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnModGhpcy5jaGFyYWN0ZXJLZXksIHsgc3RhcnQ6IDAsIGVuZDogNCB9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3R1cm4nLFxyXG4gICAgICAgICAgICBmcmFtZXM6IFt7IGtleTogdGhpcy5jaGFyYWN0ZXJLZXksIGZyYW1lOiA1IH1dLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDIwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAncmlnaHQnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnModGhpcy5jaGFyYWN0ZXJLZXksIHsgc3RhcnQ6IDYsIGVuZDogOSB9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGFkZFBsYXRmb3JtcyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5jcmVhdGUoNDAwLCA1NjgsICdncm91bmQnKS5zZXRTY2FsZSgyKS5yZWZyZXNoQm9keSgpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmNyZWF0ZSg2MDAsIDQwMCwgJ2dyb3VuZCcpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmNyZWF0ZSg1MCwgMjUwLCAnZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMuY3JlYXRlKDc1MCwgMjIwLCAnZ3JvdW5kJyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWVTY2VuZSc7XHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyA9IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWc7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBHYW1lQ29uZmlnID0ge1xyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICB3aWR0aDogODAwLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMzAwIH0sXHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzY2VuZTogR2FtZVNjZW5lXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiXSwic291cmNlUm9vdCI6IiJ9