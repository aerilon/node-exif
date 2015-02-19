//
// A couple of methods that make working with buffers more easy.
//
Buffer.prototype._offset = 0

Buffer.prototype.getByte = function (offset) {
  var val = this.readUInt8(offset)
  return val;
};

Buffer.prototype.getSignedByte = function (offset) {
  var val = this.readInt8(offset)
  return val;
};

Buffer.prototype.getShort = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readUInt16BE(offset) : this.readUInt16LE(offset);
  return val;
};

Buffer.prototype.getSignedShort = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readInt16BE(offset) : this.readInt16LE(offset);
  return val;
};

Buffer.prototype.getLong = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readUInt32BE(offset) : this.readUInt32LE(offset);
  return val;
};

Buffer.prototype.getSignedLong = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readInt32BE(offset) : this.readInt32LE(offset);
  return val;
};

Buffer.prototype.getString = function (offset, length) {
  var val = this.toString('ascii', offset, offset + length)
  return val;
};

Buffer.prototype.startWithString = function (s, offset) {
  for (var i = 0; i < s.length; i++) {
    if (this[offset + i] != s.charCodeAt(i))
      return false;
  }
  return true;
}

Buffer.prototype.getOffset = function (offset) {
  return this._offset;
}

Buffer.prototype.pull = function (offset) {
  if (this._offset + offset > this.length)
  this._offset += offset;
}
