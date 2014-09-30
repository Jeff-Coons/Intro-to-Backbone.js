/* global describe, it */

// (function () {
//     'use strict';
//
//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {
//
//             });
//         });
//     });
// })();



(function () {
  'use strict';

  describe('Render the ul to the DOM', function() {
    it('should insert a ul to the DOM', function() {
      this.veiw = new SearchContainer();
      this.view.render();
      expect($('body').has('ul'));
    });
  });


})();
