"use strict";
var rocketnia = rocketnia || {};
rocketnia.eraFiles = rocketnia.eraFiles || {};
rocketnia.eraFiles[ "test.cene" ] =
"\\= test.cene\n\\= Copyright 2015, 2016 Ross Angle. Released under the MIT License.\n\\=\n\\= These are some tests for Cene. They depend on\n\\= era-cene-prelude.cene.\n\n\n(defn dex-test-fix dex-test-fix\n  (dex-default dex-struct.nil\n  /dex-default (dex-struct yep dex-test-fix)\n  /dex-default (dex-struct nope dex-test-fix)\n  /dex-default (dex-struct cons dex-test-fix dex-test-fix)\n  /dex-default (dex-dex/nil)\n  /dex-give-up/nil))\n\n(defn dex-test -\n  (dex-fix/dexable dex-struct.dex-test-fix /dex-test-fix))\n\n\n(test (dex-test/nil)\n  (rev/cons (yep/nil) /cons (nope/nil) /nil)\n  (cons (nope/nil) /cons (yep/nil) /nil))\n\n(test (dex-test/nil)\n  (rev/nil)\n  (nil))\n\n(test (dex-test/nil)\n  (not/yep/nil)\n  (nope/nil))\n\n(test (dex-test/nil)\n  (let x (nope/nil) y (yep/nil)\n  /let x y y x\n  /cons x y)\n  (cons (yep/nil) (nope/nil)))\n\n(test (dex-test/nil)\n  (list (nil) (nil))\n  (cons (nil) /cons (nil) /nil))\n\n(test (dex-test/nil)\n  (dex-struct cons dex-struct.nil dex-struct.nil)\n  (dex-struct cons dex-struct.nil dex-struct.nil))\n\n(test (dex-test/nil)\n  (call-dex (dex-struct cons dex-struct.nil dex-struct.nil)\n    (cons (nil) /nil)\n    (cons (nil) /nil))\n  (yep/nil))\n\n(test (dex-test/nil)\n  (in-dex (dex-default dex-struct.nil dex-struct.nil) /nil)\n  (yep/nil))\n\n(test (dex-test/nil)\n  (in-dex dex-struct.nil /nil)\n  (yep/nil))\n\n(test (dex-test/nil)\n  (case\n    (proj1 yep /call-dex\n      (dex-default dex-struct.nil (dex-struct yep dex-struct.nil))\n      (nil)\n      (yep/nil))\n    nil\n    (yep/nil)\n    (nope/nil))\n  (nope/nil))\n\n(test (dex-test/nil)\n  (table-get (dexable (dex-string/nil) str.woo)\n    (table-shadow (dexable (dex-string/nil) str.woo) (yep/nope/nil)\n    /table-empty/nil))\n  (yep/nope/nil))\n";
