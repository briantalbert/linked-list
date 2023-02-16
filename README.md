# linked-list

Implementation of linked list.

Classes:

LinkedList class, representing the full list.
Node class, containing a value and a link to the nextNode (null by default).


Functions:

append(value) - adds a new node containing value to the end of the list
prepend(value) - adds a new node containing value to the start of the list
getSize() - returns the total number of nodes in the list
getHead() - returns the first node in the list
getTail() - returns the last node in the list
at(idx) - returns the node at the given index
pop() - removes the last element from the list
contains(value) - returns true if the passed in value is in the list and otherwise returns false.
find(value) - returns the index of the node containing value, or null if not found.
toString() - returns string representation of list in the form ( x ) -> ( y ) -> ... -> ( z ) -> null
insertAt(value, idx) - inserts a new node with the provided value at the given index.
removeAt(idx) - removes the node at the given index.
