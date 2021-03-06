Effects, modalities, and definers
=================================


.. _no-effects:

no-effects
----------

Call with ``(ignored)``

Monadically, does nothing.


.. _fuse-effects:

fuse-effects
------------

Call with ``(ignored)``

Returns a fuse that fuses monadic computations by creating a monadic computation that executes them both.

.. note:: This is a fuse, not a merge, because it's not necessarily idempotent when performance is taken into account. If a monadic computation is fused with itself this way, the resulting monadic computation may be twice as slow.


.. _get-mode:

get-mode
--------

Call with ``(fn mode)``

Monadically, passes the current modality to the given monadic callback in the same tick.

A modality must be passed to certain effectful primitives as a way to give the effects something to be deterministic by. (The terms "mode" and "modality" might be idiosyncrasies of Cene. A more standard term is "world-passing style.")


.. _assert-current-mode:

assert-current-mode
-------------------

Call with ``mode``

Returns (:ref:`nil`). The given modality must be the current one. If it isn't, this causes an error.


.. _later:

later
-----

Call with ``effects``

Monadically, executes the given monadic computation in a later tick.

This is useful mainly for concurrency. It allows the given computation to depend on values that might not be available right now.


.. _make-promise-later:

make-promise-later
------------------

Call with ``(fn getdef)``

Monadically, creates a new uninitialized piece of state, and calls a monadic callback in a later tick with a getdef that retrieves and defines the value of that state.

**Rationale**: Cene expressions are designed so they can have consistent performance each time they run. Therefore, algorithms written as Cene expressions cannot rely on laziness or JIT techniques (even though an implementation of Cene may in fact implement such things as optimizations). However, laziness is useful to reduce the amortized computational complexity of data structures like finger trees, which are good for representing strings. To support this data structure technique, Cene offers :ref:`make-promise-later`, a standard way to allocate promise state even from a computation that has no other access to state.

Not all Cene modalities will necessarily support the :ref:`make-promise-later` side effect. However, the macroexpansion and unit test modalities do, and that's everything for now.


.. _getdef:

getdef
------

Construct with ``get def``

A value that indicates a function ``get`` that takes a mode and obtains a value, along with indicating a definer ``def`` to determine that value.


.. _definer-define:

definer-define
--------------

Call with ``definer dex value``

Monadically, checks whether the given value satisfies the given dex, and writes to the given definer with the dex and the value either way. If two definitions are written to the same dex, then they must have the same dex and value, and the value must satisfy the dex, or there's an error. The dex serves no purpose other than to verify this.


.. _committing-to-define:

committing-to-define
--------------------

Call with ``definer effects``

.. todo:: Implement and use this.

Monadically, executes the effects in a later tick and commits to writing to the given definer in that tick or later.

This is only useful to suppress error messages about the definition not existing if there's an error in this logical thread.
