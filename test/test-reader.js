// test-reader.js (part of Era)
// Copyright 2013 Ross Angle. Released under the MIT License.
"use strict";


addNaiveIsoUnitTest( function ( then ) {
    reader( {
        stream: stringStream(
            " (woo;comment\n b (c( woo( ) string) / x//)/())" ),
        readerMacros: readerMacros,
        end: function ( $ ) {
            $.then( { ok: false, msg: "Reached the end" } );
        },
        unrecognized: function ( $ ) {
            $.then( { ok: false, msg: "Unrecognized char" } );
        },
        then: function ( result ) {
            then( result, { ok: true, val:
                [ "woo", "b",
                    [ "c( woo( ) string)" , [ "x", [ [] ] ] ],
                    [ [] ] ]
            } );
        }
    } );
} );