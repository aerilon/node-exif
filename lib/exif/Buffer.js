//
// A couple of methods that make working with buffers more easy.
//
Buffer.prototype._offset = 0

Buffer.prototype._slice = Buffer.prototype.slice

Buffer.prototype.readUInt = function (offset, length, bigEndian)
{
  var val = (bigEndian) ? this.readUIntBE(offset, length) : this.readUIntLE(offset, length);
  return val;
}

Buffer.prototype.readInt = function (offset, length, bigEndian)
{
  var val = (bigEndian) ? this.readIntBE(offset, length) : this.readIntLE(offset, length);
  return val;
}

Buffer.prototype.readUInt8 = function (offset) {
  var val = this.readUInt8(offset)
  return val;
};

Buffer.prototype.readInt8 = function (offset) {
  var val = this.readInt8(offset)
  return val;
};

Buffer.prototype.readUInt16 = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readUInt16BE(offset) : this.readUInt16LE(offset);
  return val;
};

Buffer.prototype.readInt16 = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readInt16BE(offset) : this.readInt16LE(offset);
  return val;
};

Buffer.prototype.readUInt32 = function (offset, bigEndian) {
  var val = (bigEndian) ? this.readUInt32BE(offset) : this.readUInt32LE(offset);
  return val;
};

Buffer.prototype.readInt32 = function (offset, bigEndian) {
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

Buffer.prototype.slice = function (start, end) {
  var buf

  buf = this._slice(start, end)

  return buf
}

Buffer.prototype.getOffset = function (offset) {
  return this._offset;
}

Buffer.prototype.pull = function (offset) {
  if (this._offset + offset > this.length)
  this._offset += offset;
}
