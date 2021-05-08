export const placeAfter = function (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

export const placeBefore = function (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
};
